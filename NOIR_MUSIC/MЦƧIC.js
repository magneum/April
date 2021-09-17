const ytdl = require("ytdl-core-discord");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const scdl = require("soundcloud-downloader").default;
const { canModifyQueue, NOIRWAKE } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  async play(song, message) {
    const { SOUNDCLOUD_CLIENT_ID } = require("../NOIR_SYSTEM/noir_env");

    const queue = message.client.queue.get(message.guild.id);

    if (!song) {
      setTimeout(function () {
        if (queue.connection.dispatcher && message.guild.me.voice.channel) return;
        queue.channel.leave();
        queue.textChannel.send(noir_loader.__("play.ПOIЯD_ʟᴇᴀᴠᴇ_ᴄʜᴀɴɴᴇʟ"));
      }, NOIRWAKE * 1000);
      queue.textChannel.send(noir_loader.__("play.ПOIЯD_Qᴜᴇᴜᴇ_ᴇɴᴅᴇᴅ")).catch(console.error);
      return message.client.queue.delete(message.guild.id);
    }

    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";

    try {
      if (song.url.includes("youtube.com")) {
        stream = await ytdl(song.url, { highWaterMark: 1 << 25 });
      } else if (song.url.includes("soundcloud.com")) {
        try {
          stream = await scdl.downloadFormat(song.url, scdl.FORMATS.OPUS, SOUNDCLOUD_CLIENT_ID);
        } catch (error) {
          stream = await scdl.downloadFormat(song.url, scdl.FORMATS.MP3, SOUNDCLOUD_CLIENT_ID);
          streamType = "unknown";
        }
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return message.channel.send(
        noir_loader.__mf("play.ПOIЯD_Qᴜᴇᴜᴇ_ᴇʀʀᴏʀ", { error: error.message ? error.message : error })
      );
    }

    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));

    const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();

        queue.connection.removeAllListeners("disconnect");

        if (queue.loop) {
          // if loop is on, push the song back at the end of the queue
          // so it can repeat endlessly
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          // Recursively play the next song
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);

    try {
      var playingMessage = await queue.textChannel.send(
        noir_loader.__mf("play.ПOIЯD_ꜱᴛᴀʀᴛᴇᴅ_ᴘʟᴀʏɪɴɢ", { title: song.title, url: song.url })
      );
      await playingMessage.react("⏭");
      await playingMessage.react("⏯");
      await playingMessage.react("🔇");
      await playingMessage.react("🔉");
      await playingMessage.react("🔊");
      await playingMessage.react("🔁");
      await playingMessage.react("⏹");
    } catch (error) {
      console.error(error);
    }

    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000
    });

    collector.on("collect", (reaction, user) => {
      if (!queue) return;
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
        case "⏭":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.connection.dispatcher.end();
          queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ꜱᴋɪᴘ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          collector.stop();
          break;

        case "⏯":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ᴘᴀᴜꜱᴇ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ʀᴇꜱᴜᴍᴇ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          }
          break;

        case "🔇":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.muted = !queue.muted;
          if (queue.muted) {
            queue.connection.dispatcher.setVolumeLogarithmic(0);
            queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ᴍᴜᴛᴇᴅ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          } else {
            queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
            queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ᴜɴᴍᴜᴛᴇᴅ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          }
          break;

        case "🔉":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 0) return;
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.volume = Math.max(queue.volume - 10, 0);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(noir_loader.__mf("play.ПOIЯD_ᴅᴇᴄʀᴇᴀꜱᴇᴅ_ᴠᴏʟᴜᴍᴇ", { author: user, volume: queue.volume }))
            .catch(console.error);
          break;

        case "🔊":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 100) return;
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.volume = Math.min(queue.volume + 10, 100);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(noir_loader.__mf("play.ПOIЯD_ɪɴᴄʀᴇᴀꜱᴇᴅ_ᴠᴏʟᴜᴍᴇ", { author: user, volume: queue.volume }))
            .catch(console.error);
          break;

        case "🔁":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.loop = !queue.loop;
          queue.textChannel
            .send(
              noir_loader.__mf("play.ПOIЯD_ʟᴏᴏᴘ_ꜱᴏɴɢ", {
                author: user,
                loop: queue.loop ? noir_loader.__("common.on") : noir_loader.__("common.off")
              })
            )
            .catch(console.error);
          break;

        case "⏹":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
          queue.songs = [];
          queue.textChannel.send(noir_loader.__mf("play.ПOIЯD_ꜱᴛᴏᴘ_ꜱᴏɴɢ", { author: user })).catch(console.error);
          try {
            queue.connection.dispatcher.end();
          } catch (error) {
            console.error(error);
            queue.connection.disconnect();
          }
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.reactions.removeAll().catch(console.error);
      if (playingMessage && !playingMessage.deleted) {
        playingMessage.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  }
};

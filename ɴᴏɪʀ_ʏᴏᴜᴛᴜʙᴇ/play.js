`=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                        —••÷[🦋NOIR🦋]÷••— 
                                                      Discord Music player Bot 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================`
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const NoirYt = require("ytdl-core-discord");
const { canModifyQueue } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys");
/**
 * 
 * 
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * 
 * 
 */
module.exports = {
  async play(song, message) {
    let config;
    try { config = require("../config.json"); } catch (error) {
      config = null;
    }
    /**
     * 
     * 
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
    
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
    
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
    
     * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
     * 
     * 
     */
    const PRUNING = config ? config.PRUNING : process.env.PRUNING;
    const queue = message.client.queue.get(message.guild.id);

    if (!song) {
      setTimeout(function () {
        if (queue.connection.dispatcher && message.guild.me.voice.channel) return;
        queue.channel.leave();
        !PRUNING && queue.textChannel.send(pnoir.__("play.ɴᴏɪʀ_leave_Channel"));
      }, 30 * 1000);
      !PRUNING && queue.textChannel.send(pnoir.__("play.ɴᴏɪʀ_queue_Ended")).catch(console.error);
      return message.client.queue.delete(message.guild.id);
    }

    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";

    try {
      if (song.url.includes("youtube.com")) {
        stream = await NoirYt(song.url, { highWaterMark: 1 << 25 });
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return message.channel.send(
        pnoir.__mf("play.ɴᴏɪʀ_queue_Error", { error: error.message ? error.message : error })
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
      var noirPlayerMsg = await queue.textChannel.send(
        pnoir.__mf("play.ɴᴏɪʀ_started_Playing", { title: song.title, url: song.url })
      );
      await noirPlayerMsg.react("➡️");
      await noirPlayerMsg.react("🚦");
      await noirPlayerMsg.react("🔕");
      await noirPlayerMsg.react("🔉");
      await noirPlayerMsg.react("🔊");
      await noirPlayerMsg.react("🔁");
      await noirPlayerMsg.react("❌");

    } catch (error) {
      console.error(error);
    }

    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = noirPlayerMsg.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000
    });

    collector.on("collect", (reaction, user) => {
      if (!queue) return;
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
        case "➡️":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.connection.dispatcher.end();
          queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_skip_Song", { author: user })).catch(console.error);
          collector.stop();
          break;

        case "🚦":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_pause_Song", { author: user })).catch(console.error);
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_resume_Song", { author: user })).catch(console.error);
          }
          break;

        case "🔕":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.muted = !queue.muted;
          if (queue.muted) {
            queue.connection.dispatcher.setVolumeLogarithmic(0);
            queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_muted_Song", { author: user })).catch(console.error);
          } else {
            queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
            queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_unmuted_Song", { author: user })).catch(console.error);
          }
          break;

        case "🔉":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 0) return;
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.volume = Math.max(queue.volume - 10, 0);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(pnoir.__mf("play.ɴᴏɪʀ_decreased_Volume", { author: user, volume: queue.volume }))
            .catch(console.error);
          break;

        case "🔊":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 100) return;
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.volume = Math.min(queue.volume + 10, 100);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(pnoir.__mf("play.ɴᴏɪʀ_increased_Volume", { author: user, volume: queue.volume }))
            .catch(console.error);
          break;

        case "🔁":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.loop = !queue.loop;
          queue.textChannel
            .send(
              pnoir.__mf("play.ɴᴏɪʀ_loop_Song", {
                author: user,
                loop: queue.loop ? pnoir.__("common.on") : pnoir.__("common.off")
              })
            )
            .catch(console.error);
          break;

        case "❌":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return pnoir.__("common.errorNotChannel");
          queue.songs = [];
          queue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_stop_Song", { author: user })).catch(console.error);
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
      noirPlayerMsg.reactions.removeAll().catch(console.error);
      if (PRUNING && noirPlayerMsg && !noirPlayerMsg.deleted) {
        noirPlayerMsg.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  }
};

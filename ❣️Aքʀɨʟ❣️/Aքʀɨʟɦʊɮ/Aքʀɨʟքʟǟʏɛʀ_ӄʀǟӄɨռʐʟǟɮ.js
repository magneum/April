const ytdl = require("discord-ytdl-core");
const { splitBar } = require("string-progressbar");
const { canModifyQueue, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const {
  MessageEmbed,
  splitMessage,
  escapeMarkdown,
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`                       GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  async play(song, message, client, filters) {
    try {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        queue.channel.leave();
        message.client.queue.delete(message.guild.id);
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0040")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ has left the voice channel!**`)
          )
          .catch(console.error);
        return;
      }

      let stream = null;
      let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
      let isnotayoutube = false;
      let seekTime = 0;
      let oldSeekTime = queue.realseek;
      let encoderArgstoset;

      if (filters === "remove") {
        queue.filters = ["-af", "dynaudnorm=f=200"];
        encoderArgstoset = queue.filters;
        try {
          seekTime =
            (queue.connection.dispatcher.streamTime -
              queue.connection.dispatcher.pausedTime) /
              1000 +
            oldSeekTime;
        } catch {
          seekTime = 0;
        }
        queue.realseek = seekTime;
      } else if (filters) {
        try {
          seekTime =
            (queue.connection.dispatcher.streamTime -
              queue.connection.dispatcher.pausedTime) /
              1000 +
            oldSeekTime;
        } catch {
          seekTime = 0;
        }
        queue.realseek = seekTime;
        queue.filters.push(filters);
        encoderArgstoset = ["-af", queue.filters];
      }

      try {
        if (song.url.includes("youtube.com")) {
          stream = ytdl(song.url, {
            filter: "audioonly",
            opusEncoded: true,
            encoderArgs: encoderArgstoset,
            bitrate: 320,
            seek: seekTime,
            quality: "highestaudio",
            liveBuffer: 40000,
            highWaterMark: 1 << 25,
          });
        } else if (
          song.url.includes(".mp3") ||
          song.url.includes("baseradiode")
        ) {
          stream = song.url;
          isnotayoutube = true;
        }
      } catch (error) {
        if (queue) {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }

        console.error(error);
        message.channel.send(`Error: ${error.message ? error.message : error}`);
        return;
      }
      queue.connection.on("disconnect", () =>
        message.client.queue.delete(message.guild.id)
      );

      if (isnotayoutube) {
        const dispatcher = queue.connection
          .play(stream)
          .on("finish", () => {
            if (collector && !collector.ended) collector.stop();
            if (queue.loop) {
              let lastSong = queue.songs.shift();
              queue.songs.push(lastSong);
              module.exports.play(queue.songs[0], message);
            } else {
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
      } else {
        const dispatcher = queue.connection
          .play(stream, { type: streamType })
          .on("finish", () => {
            if (collector && !collector.ended) collector.stop();
            if (queue.loop) {
              let lastSong = queue.songs.shift();
              queue.songs.push(lastSong);
              module.exports.play(queue.songs[0], message);
            } else {
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
      }

      try {
        let thumb;
        if (song.thumbnail === undefined)
          thumb =
            "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
        else thumb = song.thumbnail.url;
        var playingMessage = await queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0040")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
              .setImage(thumb)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••========—

🏷**Title**
>• [${song.title}](${song.url})
🏷**Requested By**
>• ${message.author.username}#${message.author.discriminator}
🏷**Duration**
>• ${song.duration}

÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••========—`)
          )
          .catch(console.error);
        await playingMessage.react("⏭"); //skip
        await playingMessage.react("⏯️"); //pause
        await playingMessage.react("🔄"); //loop
        await playingMessage.react("⏹"); //stop
        await playingMessage.react("🎙️"); //np
        await playingMessage.react("📖"); //queue
        await playingMessage.react("🔇"); // mute/unmute
        await playingMessage.react("🔉"); //vol -
        await playingMessage.react("🔊"); //vol +
      } catch (error) {
        console.error(error);
      }

      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = playingMessage.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000,
      });
      collector.on("collect", async (reaction, user) => {
        if (!queue) {
          return;
        }
        const member = message.guild.member(user);

        switch (reaction.emoji.name) {
          case "🔇":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);
              return;
            }
            queue.muted = !queue.muted;
            if (queue.muted) {
              queue.connection.dispatcher.setVolumeLogarithmic(0);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

🔇 Muted the music!`)
                )
                .catch(console.error);
            } else {
              queue.connection.dispatcher.setVolumeLogarithmic(
                queue.volume / 100
              );
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

🔊 Unmuted the music!`)
                )
                .catch(console.error);
            }
            break;

          case "🔉":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 0) {
              return;
            }
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error);

              return;
            }
            queue.volume = Math.max(queue.volume - 10, 0);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}

🔉 Decreased the volume, 
Volume now at = **${queue.volume}%**`)
              )
              .catch(console.error);

            break;

          case "🔊":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 100) {
              return;
            }
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error);

              return;
            }
            queue.volume = Math.min(queue.volume + 10, 100);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}

🔊 Increased the volume, the volume is now ${queue.volume}%`)
              )
              .catch(console.error);

            break;

          case "📖":
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }

            reaction.users.remove(user).catch(console.error);
            const description = queue.songs.map(
              (song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`
            );
            let queueEmbed = new MessageEmbed()
              .setTitle("Music Queue")
              .setDescription(description)
              .setColor("#ff0040");
            const splitDescription = splitMessage(description, {
              maxLength: 2048,
              char: "\n",
              prepend: "",
              append: "",
            });
            splitDescription.forEach(async (m) => {
              queueEmbed.setDescription(m);
              message.react("✅");
              message.channel.send(queueEmbed);
            });
            break;

          case "🎙️":
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }

            reaction.users.remove(user).catch(console.error);
            const song = queue.songs[0];
            let minutes = song.duration.split(":")[0];
            let seconds = song.duration.split(":")[1];
            let ms = Number(minutes) * 60 + Number(seconds);
            let thumb;
            if (song.thumbnail === undefined)
              thumb =
                "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
            else thumb = song.thumbnail.url;
            const seek =
              (queue.connection.dispatcher.streamTime -
                queue.connection.dispatcher.pausedTime) /
              1000;
            const left = ms - seek;
            let nowPlaying = new MessageEmbed()
              .setTitle("Now playing")
              .setDescription(`[**${song.title}**](${song.url})`)
              .setThumbnail(thumb)
              .setColor("#ff0040")
              .setFooter(
                "Time Remaining: " +
                  new Date(left * 1000).toISOString().substr(11, 8)
              );
            if (ms >= 10000) {
              nowPlaying.addField("\u200b", "🔴 LIVE", false);
              return message.channel.send(nowPlaying);
            }
            if (ms > 0 && ms < 10000) {
              nowPlaying.addField(
                "\u200b",
                "**[" +
                  splitBar(ms == 0 ? seek : ms, seek, 25, "▬", "⚪️")[0] +
                  "]**\n**" +
                  new Date(seek * 1000).toISOString().substr(11, 8) +
                  " / " +
                  (ms == 0
                    ? " ◉ LIVE"
                    : new Date(ms * 1000).toISOString().substr(11, 8)) +
                  "**",
                false
              );
              return message.channel.send(nowPlaying);
            }
            break;

          case "⏭":
            queue.playing = true;
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }
            queue.connection.dispatcher.end();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}
⏩ **Skipped the music**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              })
              .catch(console.error);
            collector.stop();
            break;

          case "⏯️":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }
            if (queue.playing) {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.pause(true);
              var ᴀᴘʀɪʟᴘᴀᴜꜱᴇᴍᴇʙᴇᴅ = new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(
                  `**Ú§êr >** ${user.username} paused the music.`,
                  "https://cdn.discordapp.com/emojis/769912238236106793.png"
                );
              await queue.textChannel
                .send(ᴀᴘʀɪʟᴘᴀᴜꜱᴇᴍᴇʙᴇᴅ)
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 30000,
                  });
                });
            } else {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.resume();
              var ᴀᴘʀɪʟᴘʟᴀʏᴇᴍʙᴇᴅ = new MessageEmbed()
                .setColor("#FF5F56")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(
                  `**Ú§êr >** ${user.username} resumed the music!`,
                  "https://cdn.discordapp.com/emojis/769912238236106793.png"
                );
              await queue.textChannel
                .send(ᴀᴘʀɪʟᴘʟᴀʏᴇᴍʙᴇᴅ)
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
            }
            break;

          case "🔄":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }
            queue.loop = !queue.loop;
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("April❣️Music by🔱KrakinzLab™️")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}

April❣️Music queue loop has been ${queue.loop ? "enabled" : " disabled"}`)
              )
              .catch(console.error);

            break;

          case "⏹":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error);

              return;
            }
            queue.songs = [];
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("April❣️Music by🔱KrakinzLab™️")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(
                    `**Ú§êr >** ${user.username} stopped the music!`,
                    "https://cdn.discordapp.com/emojis/769915194066862080.png"
                  )
              )
              .catch(console.error);

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
      });
    } catch (ErrorApril) {
      message.channel.send("@everyone");
      message.client.channels.cache
        .get("894574779561017384")
        .send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setAuthor(`⚠️Warning!`)
            .setTitle("April❣️Music by🔱KrakinzLab™️")
            .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
            .setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ErrorApril}*`)
        )
        .catch(console.error);

      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setAuthor("Error🔺Caught")
          .setTitle("April❣️Music by🔱KrakinzLab™️")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
          .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
          .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns

**Error🔻Caught**
*${ErrorApril}*`)
      );
      console.error(ErrorApril);
    }
  },
};

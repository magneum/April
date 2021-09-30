const ytdl = require("ytdl-core-discord");
const { canModifyQueue, ɴᴏɪʀᴡᴀᴋᴇ, ռօɨʀքʊʀɢɛʀ } = require("../🦋ռօɨʀ🦋/noirtem/noir_env");
const { MessageEmbed } = require("../🦋ռօɨʀ🦋/ӄʀǟӄɨռʐʟǟɮ/src");
const getVideoId = require("get-video-id");
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
module.exports = {
  async play(song, message) {
    try {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        setTimeout(function () {
          if (queue.connection.dispatcher && message.guild.me.voice.channel) {
            return;
          }
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
          queue.channel.leave();
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#6272a4")
                .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`=========⚜️=========

**💜Noir** *has left the voice channel!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              });
            });
        }, ɴᴏɪʀᴡᴀᴋᴇ);
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        const queue = message.client.queue.get(message.guild.id);
        message.client.queue.delete(message.guild.id);
        return;
      }
      let stream = null;
      let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      try {
        if (song.url.includes("youtube.com")) {
          stream = await ytdl(song.url, {
            highWaterMark: 1 << 25,
          });
        } else {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

Only **YouTube** playing/streaming is allowed`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          return;
        }
      } catch (error) {
        if (queue) {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        console.error(error);
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}
=========⚜️=========

**Error:** 
*${error}*`
              )
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      const dispatcher = queue.connection
        .play(stream, { type: streamType })
        .on("finish", () => {
          if (collector && !collector.ended) collector.stop();
          queue.connection.removeAllListeners("disconnect");
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
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      try {
        const { id } = getVideoId(`${song.url}`);
        var ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ = await queue.textChannel.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setTitle("💯ᴅɪʀᴇᴄᴛʟʏ ꜱᴛʀᴇᴀᴍɪɴɢ ᴜꜱɪɴɢ-𝐘𝐨𝐮𝐓𝐮𝐛𝐞")
            .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
            .setDescription(`
=========⚜️=========

**🏷Title-** ${song.title}
**🔗Link-** ${song.url}
`)
        );

        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏭");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏸");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔇");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔉");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔊");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔁");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏺");
      } catch (error) {
        console.error(error);
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000,
      });
      collector.on("collect", (reaction, user) => {
        if (!queue) {
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        const member = message.guild.member(user);
        switch (reaction.emoji.name) {
          case "⏭":
            queue.playing = true;
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* ***join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.connection.dispatcher.end();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(`**User:** ${message.author}
=========⚜️=========

⏩ *Skipped the song*`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            collector.stop();
            break;

          case "⏸":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            if (queue.playing) {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.pause(true);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(`**User:** ${message.author}
=========⚜️=========

🚦 *Paused the music.*`)
                )
                .catch(console.error);
            } else {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.resume();
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(`**User:** ${message.author}
=========⚜️=========

▶ *Resumed the music!*`)
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
            }
            break;
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
          case "🔇":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.muted = !queue.muted;
            if (queue.muted) {
              queue.connection.dispatcher.setVolumeLogarithmic(0);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(`**User:** ${message.author}
=========⚜️=========

🔇 Muted the music!`)
                )
                .catch(console.error);
              // .then((message) => {
              // message.delete({
              // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              // });
              // });
            } else {
              queue.connection.dispatcher.setVolumeLogarithmic(
                queue.volume / 100
              );
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(`**User:** ${message.author}
=========⚜️=========

🔊 Unmuted the music!`)
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
            }
            break;
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
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
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.volume = Math.max(queue.volume - 10, 0);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(`**User:** ${message.author}
=========⚜️=========

🔉 Decreased the volume, 
Volume now at = **${queue.volume}%**`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            break;
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
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
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              // message.delete({
              // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              // });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.volume = Math.min(queue.volume + 10, 100);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(`**User:** ${message.author}
=========⚜️=========

🔊 Increased the volume, the volume is now ${queue.volume}%`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            break;
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
          case "🔁":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.loop = !queue.loop;
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(`**User:** ${message.author}
=========⚜️=========

Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            message.client.queue.delete(message.guild.id);
            break;
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
          case "⏺":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`
                    )
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
              //   });
              // });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            queue.songs = [];
            const { id } = getVideoId(`${song.url}`);
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#bd93f9")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(
                    `=========⚜️=========

Last Song was 👇🏻
*${song.title}*`
                  )
              )
              .catch(console.error);
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
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
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      collector.on("end", () => {
        ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.reactions.removeAll().catch(console.error);
        if (ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ && !ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.deleted) {
          ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.delete({ timeout: 3000 }).catch(console.error);
        }
      });
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
    } catch (ErrorNoir) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setTitle("🔺ERROR CAUGHT🔻")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
          .setDescription(`
**Noir** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorNoir}*`)
      );
      console.error(ErrorNoir);
    }
  },
};

const ytdl = require("ytdl-core-discord");
const {
  canModifyQueue,
  ᴀᴘʀɪʟᴡᴀᴋᴇ,
  Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const getVideoId = require("get-video-id");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  async play(music, message) {
    try {
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      const queue = message.client.queue.get(message.guild.id);
      if (!music) {
        setTimeout(function () {
          if (queue.connection.dispatcher && message.guild.me.voice.channel) {
            return;
          }
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          queue.channel.leave();
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#6c0000")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ has left the voice channel!**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
        }, ᴀᴘʀɪʟᴡᴀᴋᴇ);
        const queue = message.client.queue.get(message.guild.id);
        message.client.queue.delete(message.guild.id);
        return;
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      let musicfetcher = null;
      let musicfetchergenre = music.url.includes("youtube.com")
        ? "opus"
        : "ogg/opus";
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      try {
        if (music.url.includes("youtube.com")) {
          musicfetcher = await ytdl(music.url, {
            highWaterMark: 1 << 25,
          });
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        } else {
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
                .setDescription(`👍**Ú§êr >** ${message.author}
**Only YouTube playing/streaming is allowed**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      } catch (error) {
        if (queue) {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
        console.error(error);
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
              .setDescription(`👍**Ú§êr >** ${message.author}
**Error:** 
*${error}*`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      const dispatcher = queue.connection
        .play(musicfetcher, {
          type: musicfetchergenre,
        })
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      try {
        const { id } = getVideoId(`${music.url}`);
        message.react("✅");
        message.react("❣️");
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        message.client.channels.cache
          .get("894574779561017384")
          .send(
            new MessageEmbed()
              .setColor("#6c0000")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`---------------:lady_beetle:---------------

👍❣️𝗛𝗮𝘀 𝗯𝗲𝗲𝗻 𝗣𝗹𝘂𝗴𝗴𝗲𝗱 𝗯𝘆 \`${message.author}\`
📄 𝗮𝗻𝗱 𝗶𝘀 𝗯𝗼𝘂𝗻𝗱 𝘁𝗼 \`#${message.channel.name}\`
`)
          )
          .catch(console.error);
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        var ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ = await queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#6c0000")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
              .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`
🏷**Title**
|• [${music.title}](${music.url})
🏷**Requested By**
|• ${message.author}

---------------:lady_beetle:---------------

⏭•**Skip music**
🔇•**Mute/Unmute music.**
🔊•**Change volume  music.**
🔁•**Toggle music loop.**
⏺•**Stops the music queue.**

💯Direct Streaming from 𝐘𝐨𝐮𝐓𝐮𝐛𝐞`)
          )
          .catch(console.error);
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏭");
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔇");
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔉");
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔊");
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔁");
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏺");
      } catch (error) {
        console.error(error);
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.createReactionCollector(filter, {
        time: music.duration > 0 ? music.duration * 1000 : 600000,
      });
      collector.on("collect", (reaction, user) => {
        if (!queue) {
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`👍**Ú§êr >** ${message.author}
**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.connection.dispatcher.end();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6c0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`👍**Ú§êr >** ${message.author}
⏩ **Skipped the music**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            collector.stop();
            break;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
                    .setDescription(`👍**Ú§êr >** ${message.author}

**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.muted = !queue.muted;
            if (queue.muted) {
              queue.connection.dispatcher.setVolumeLogarithmic(0);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6c0000")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`👍**Ú§êr >** ${message.author}

🔇 Muted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
              `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
              // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            } else {
              queue.connection.dispatcher.setVolumeLogarithmic(
                queue.volume / 100
              );
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6c0000")
                    .setAuthor(`⚠️Warning!`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`👍**Ú§êr >** ${message.author}

🔊 Unmuted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
            }
            break;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          case "🔉":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 0) {
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
                    .setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.volume = Math.max(queue.volume - 10, 0);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6c0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`👍**Ú§êr >** ${message.author}

🔉 Decreased the volume, 
Volume now at = **${queue.volume}%**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            break;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          case "🔊":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 100) {
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
                    .setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.volume = Math.min(queue.volume + 10, 100);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6c0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`👍**Ú§êr >** ${message.author}

🔊 Increased the volume, the volume is now ${queue.volume}%`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            break;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          case "🔁":
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
                    .setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.loop = !queue.loop;
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6c0000")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`👍**Ú§êr >** ${message.author}

Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            message.client.queue.delete(message.guild.id);
            break;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          case "⏺":
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
                    .setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
            // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
            queue.songs = [];
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      collector.on("end", async () => {
        await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.reactions.removeAll().catch(console.error);
        // await ᴀᴘʀɪʟᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.delete();
      });
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
    } catch (ErrorApril) {
      message.channel.send("@everyone");
      message.client.channels.cache
        .get("894574779561017384")
        .send(
          new MessageEmbed()
            .setColor("#6c0000")
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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

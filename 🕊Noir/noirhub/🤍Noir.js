try {
  const ytdl = require("ytdl-core-discord");
  const {
    canModifyQueue,
    ɴᴏɪʀᴡᴀᴋᴇ,
    ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
  } = require("../noirtem/noir_env");
  const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
  const getVideoId = require("get-video-id");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 🤍Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  module.exports = {
    async play(song, message) {
      const NoirQueue = message.client.NoirQueue.get(message.guild.id);
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      if (!song) {
        setTimeout(function () {
          if (NoirQueue.connection.NoirDispatcher && message.guild.me.voice.channel) {
            return;
          }
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          NoirQueue.channel.leave();
          NoirQueue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#6272a4")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(`=========:radio_button:=========

🤎**Noir** *has left the voice channel!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        }, ɴᴏɪʀᴡᴀᴋᴇ);
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        const NoirQueue = message.client.NoirQueue.get(message.guild.id);
        // NoirQueue.textChannel
        //   .send(
        //     new MessageEmbed()
        //       .setColor("#6272a4")
        //       .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
        //       .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        //       .setFooter(
        //         "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
        //       )
        //       .setDescription(
        //         "=========:radio_button:=========\n\n💚**Noir's** MusicQueue has ended!"
        //       )
        //   )
        //   .catch(console.error)
        //   .then((message) => {
        //     message.delete({
        //       timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        //     });
        //   });
        message.client.NoirQueue.delete(message.guild.id);
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
              .setDescription(`=========:radio_button:=========

Previous Queue has been cleaned!
**Noir** is ready for new queues.
`)
          )
          .catch(console.error);
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      let stream = null;
      let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      try {
        if (song.url.includes("youtube.com")) {
          stream = await ytdl(song.url, {
            highWaterMark: 1 << 25,
          });
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
        } else {
          const embedmusicnot = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋").setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Only **YouTube** playing/streaming is allowed`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedmusicnot).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
      } catch (error) {
        if (NoirQueue) {
          NoirQueue.songs.shift();
          module.exports.play(NoirQueue.songs[0], message);
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        console.error(error);
        const embedmusic1 = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**Error:** 
*${error}*`
          );
        message.react("❌");
        message.react("🔥");
        message.channel.send(embedmusic1).catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        //   });
        // });
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      // NoirQueue.connection.on("disconnect", () =>
      //   message.client.NoirQueue.delete(message.guild.id)
      // );
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const NoirDispatcher = NoirQueue.connection
        .play(stream, { type: streamType })
        .on("finish", () => {
          if (collector && !collector.ended) collector.stop();
          NoirQueue.connection.removeAllListeners("disconnect");
          if (NoirQueue.loop) {
            let lastSong = NoirQueue.songs.shift();
            NoirQueue.songs.push(lastSong);
            module.exports.play(NoirQueue.songs[0], message);
          } else {
            NoirQueue.songs.shift();
            module.exports.play(NoirQueue.songs[0], message);
          }
        })
        .on("error", (err) => {
          console.error(err);
          NoirQueue.songs.shift();
          module.exports.play(NoirQueue.songs[0], message);
        });
      NoirDispatcher.setVolumeLogarithmic(NoirQueue.volume / 100);
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      try {
        const { id } = getVideoId(`${song.url}`);
        var ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ = await NoirQueue.textChannel.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setTitle("💯ᴅɪʀᴇᴄᴛʟʏ ꜱᴛʀᴇᴀᴍɪɴɢ ᴜꜱɪɴɢ-𝐘𝐨𝐮𝐓𝐮𝐛𝐞")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋").setDescription(`
=========:radio_button:=========

**🏷Title-** ${song.title}
**🔗Link-** ${song.url}
`)
        );
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏭");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏸");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔇");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔉");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔊");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔁");
        await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔴");
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
      } catch (error) {
        console.error(error);
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000,
      });
      collector.on("collect", (reaction, user) => {
        if (!NoirQueue) {
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        const member = message.guild.member(user);
        switch (reaction.emoji.name) {
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "⏭":
            NoirQueue.playing = true;
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              const embedmusic2 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* ***join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic2).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.connection.NoirDispatcher.end();
            NoirQueue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                  .setDescription(`**User:** ${message.author}
=========:radio_button:=========

⏩ *Skipped the song*`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            collector.stop();
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "⏸":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              const embedmusic3 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic3).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            if (NoirQueue.playing) {
              NoirQueue.playing = !NoirQueue.playing;
              NoirQueue.connection.NoirDispatcher.pause(true);
              NoirQueue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                    .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🚦 *Paused the music.*`)
                )
                .catch(console.error);
              // ==================================================================
              // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
              // ==================================================================
            } else {
              NoirQueue.playing = !NoirQueue.playing;
              NoirQueue.connection.NoirDispatcher.resume();
              NoirQueue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                    .setDescription(`**User:** ${message.author}
=========:radio_button:=========

▶ *Resumed the music!*`)
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
            }
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "🔇":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              const embedmusic4 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic4).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.muted = !NoirQueue.muted;
            if (NoirQueue.muted) {
              NoirQueue.connection.NoirDispatcher.setVolumeLogarithmic(0);
              NoirQueue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                    .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔇 Muted the music!`)
                )
                .catch(console.error);
              // .then((message) => {
              // message.delete({
              // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              // });
              // });
              // ==================================================================
              // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
              // ==================================================================
            } else {
              NoirQueue.connection.NoirDispatcher.setVolumeLogarithmic(
                NoirQueue.volume / 100
              );
              NoirQueue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#6272a4")
                    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                    .setThumbnail(
                      `https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                    .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔊 Unmuted the music!`)
                )
                .catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
            }
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "🔉":
            reaction.users.remove(user).catch(console.error);
            if (NoirQueue.volume == 0) {
              return;
            }
            if (!canModifyQueue(member)) {
              const embedmusic5 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic5).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.volume = Math.max(NoirQueue.volume - 10, 0);
            NoirQueue.connection.NoirDispatcher.setVolumeLogarithmic(
              NoirQueue.volume / 100
            );
            NoirQueue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                  .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔉 Decreased the volume, the volume is now ${NoirQueue.volume}%`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "🔊":
            reaction.users.remove(user).catch(console.error);
            if (NoirQueue.volume == 100) {
              return;
            }
            if (!canModifyQueue(member)) {
              const embedmusic6 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic6).catch(console.error);
              // .then((message) => {
              // message.delete({
              // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              // });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.volume = Math.min(NoirQueue.volume + 10, 100);
            NoirQueue.connection.NoirDispatcher.setVolumeLogarithmic(
              NoirQueue.volume / 100
            );
            NoirQueue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                  .setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔊 Increased the volume, the volume is now ${NoirQueue.volume}%`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "🔁":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              const embedmusic7 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic7).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.loop = !NoirQueue.loop;
            NoirQueue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                  .setDescription(`**User:** ${message.author}
=========:radio_button:=========

Loop is now ${NoirQueue.loop ? "**Turned On**" : "**Turned Off**"}`)
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            message.client.NoirQueue.delete(message.guild.id);
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          case "🔴":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
              const embedmusic8 = new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
                );
              message.react("❌");
              message.react("🔥");
              message.channel.send(embedmusic8).catch(console.error);
              // .then((message) => {
              //   message.delete({
              //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              //   });
              // });
              return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            NoirQueue.songs = [];
            const { id } = getVideoId(`${song.url}`);
            NoirQueue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#6272a4")
                  .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                  .setDescription(
                    "=========:radio_button:=========\n\n❤️*MusicQueue has been successfully* **ended**"
                  )
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            try {
              NoirQueue.connection.NoirDispatcher.end();
            } catch (error) {
              console.error(error);
              NoirQueue.connection.disconnect();
            }
            collector.stop();
            break;
          // ==================================================================
          // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          default:
            reaction.users.remove(user).catch(console.error);
            break;
        }
      });
      collector.on("end", () => {
        ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.reactions.removeAll().catch(console.error);
        if (ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ && !ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.deleted) {
          ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.delete({ timeout: 3000 }).catch(console.error);
        }
      });
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
    .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
    .setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
  message.channel.send(ErrorInNoir);
  console.error(ErrorNoir);
}

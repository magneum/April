const ytsr = require("youtube-sr");
const { play } = require("./player");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");

module.exports = {
  name: "play",
  cooldown: 4,

  async execute(message, args, client) {
    try {
      if (!message.guild) {
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69159")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`⚠️Warning!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }

      if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69159")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`⚠️Warning!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`**Ú§êr >** ${message.author}

This link seems to be a playlist link.
Please use **${AքʀɨʟʄɨӼ}list** command for any YouTube playlists..`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }

      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}

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

        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}

You must be in the same Voice Channel as **Aքʀɨʟ❣️Mʊֆɨƈ**.
ID= ${message.client.user}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        if (!args.length) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}

**usage:**
${AքʀɨʟʄɨӼ}play **YouTube URL** or **Video Name**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }

        message.react("✅").catch(console.error);
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}

Cannot connect to voice channel, missing permissions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }

        if (!permissions.has("SPEAK")) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}

I cannot speak in this voice channel, make sure I have the proper permissions!`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }

        const search = args.join(" ");
        const videoPattern =
          /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$^.*(list=)([^#\&\?]*).*/gi;
        const urlValid = videoPattern.test(args[0]);

        const queueConstruct = {
          textChannel: message.channel,
          channel,
          connection: null,
          songs: [],
          loop: false,
          volume: 69,
          filters: [],
          realseek: 0,
          playing: true,
        };
        let songInfo = null;
        let song = null;
        try {
          if (serverQueue) {
            if (urlValid) {
              message.react("✅");
              message.react("❣️");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#006434")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}
**💢 Searching 🔍 \`${args.join(" ")}\` and Adding Song in less then 3secs!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 4000,
                  });
                });
            } else {
              message.react("✅");
              message.react("❣️");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#006434")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}
**💢 Searching 🔍 \`${args.join(" ")}\` and Adding Song in less then 3secs!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 4000,
                  });
                });
            }
          } else {
            queueConstruct.connection = await channel.join();
            message.author
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setTitle("April❣️Music by🔱KrakinzLab™️")
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}


**👍❣️Joined:** \`${channel.name}\`
**📄Bound to:** \`#${message.channel.name}\`
**🙋🏽‍By:** ${message.author.username}#${message.author.discriminator}`)
              )
              .catch(console.error);
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setTitle("April❣️Music by🔱KrakinzLab™️")
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}

**👍❣️Joined:** \`${channel.name}\`
**📄Bound to:** \`#${message.channel.name}\`
**🙋🏽‍By:** ${message.author.username}#${message.author.discriminator}`)
              )
              .catch(console.error);

            if (urlValid) {
              message.react("✅");
              message.react("❣️");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#006434")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}
**💢 Searching 🔍 [\`LINK\`](${args.join(
                    " "
                  )})** and Adding Song in less then 3secs!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 4000,
                  });
                });
            } else {
              message.react("✅");
              message.react("❣️");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#006434")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                    .setDescription(`**Ú§êr >** ${message.author}
**💢 Searching 🔍 \`${args.join(" ")}\`** and Adding Song in less then 3secs!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 4000,
                  });
                });
            }
            queueConstruct.connection.voice.setSelfDeaf(true);
            queueConstruct.connection.voice.setDeaf(true);
          }
        } catch {
          console.log(error);
        }
        if (urlValid) {
          try {
            songInfo = await ytsr.searchOne(search);
            song = {
              title: songInfo.title,
              url: songInfo.url,
              thumbnail: songInfo.thumbnail,
              duration: songInfo.durationFormatted,
            };
          } catch (error) {
            if (error.statusCode === 10000) {
              message.channel.send("Max use of API error: " + error.message);
              return;
            }

            console.error(error);
            return;
          }
        } else {
          try {
            songInfo = await ytsr.searchOne(search);
            song = {
              title: songInfo.title,
              url: songInfo.url,
              thumbnail: songInfo.thumbnail,
              duration: songInfo.durationFormatted,
            };
          } catch (error) {
            console.error(error);
            return;
          }
        }
        let thumb =
          "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
        if (song.thumbnail === undefined)
          thumb =
            "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
        else thumb = song.thumbnail.url;
        if (serverQueue) {
          let estimatedtime = Number(0);
          for (let i = 0; i < serverQueue.songs.length; i++) {
            let minutes = serverQueue.songs[i].duration.split(":")[0];
            let seconds = serverQueue.songs[i].duration.split(":")[1];
            estimatedtime += Number(minutes) * 60 + Number(seconds);
          }
          if (estimatedtime > 60) {
            estimatedtime = Math.round((estimatedtime / 60) * 100) / 100;
            estimatedtime = estimatedtime + " Minutes";
          } else if (estimatedtime > 60) {
            estimatedtime = Math.round((estimatedtime / 60) * 100) / 100;
            estimatedtime = estimatedtime + " Hours";
          } else {
            estimatedtime = estimatedtime + " Seconds";
          }
          serverQueue.songs.push(song);
          const newsong = new MessageEmbed()
            .setTitle("✅ " + song.title)
            .setColor("#ff0000")
            .setThumbnail(thumb)
            .setURL(song.url)
            .setDescription(`\`\`\`Has been added to the Queue.\`\`\``)
            .addField(
              "Estimated time until playing:",
              `\`${estimatedtime}\``,
              true
            )
            .addField(
              "Position in queue",
              `**\`${serverQueue.songs.length - 1}\`**`,
              true
            )
            .setFooter(
              `Requested by: ${message.author.username}#${message.author.discriminator}`,
              message.member.user.displayAvatarURL({ dynamic: true })
            );
          return serverQueue.textChannel.send(newsong).catch(console.error);
        }
        queueConstruct.songs.push(song);
        message.client.queue.set(message.guild.id, queueConstruct);
        try {
          play(queueConstruct.songs[0], message, client);
        } catch (error) {
          console.error(error);
          message.client.queue.delete(message.guild.id);
          await channel.leave();
          return;
        }
      }
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

const { canModifyQueue, AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
//                                                     GNU GENERAL PUBLIC LICENSE
//                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "skipto",
  cooldown: 3,
  execute(message, args) {
    try {
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "skipto") &&
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      //                                                     GNU GENERAL PUBLIC LICENSE
      //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "skipto") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        if (!args.length || isNaN(args[0])) {
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

⚓️**usage:**
${AքʀɨʟʄɨӼ}skipto [Queue Number]`)
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
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
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

There is nothing playing that I could skip for you.`)
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
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (!canModifyQueue(message.member)) {
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
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (args[0] > queue.songs.length) {
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

There is nothing playing that I could skip for you.`)
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
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        queue.playing = true;
        if (queue.loop) {
          for (let i = 0; i < args[0] - 2; i++) {
            queue.songs.push(queue.songs.shift());
          }
        } else {
          queue.songs = queue.songs.slice(args[0] - 2);
        }
        queue.connection.dispatcher.end();
        message.react("✅");
        message.react("❣️");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`⚠️Warning!`)
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`**Ú§êr >** ${message.author}

⏺ stopped the music!`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      //                                                     GNU GENERAL PUBLIC LICENSE
      //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      //                                                     GNU GENERAL PUBLIC LICENSE
      //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
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

const {
  canModifyQueue,
  AքʀɨʟʄɨӼ,
  Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/April_env");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
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
  name: "vol",
  cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  execute(message, args) {
    try {
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "vol") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}
---------------:lady_beetle:---------------

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.

---------------:lady_beetle:---------------`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "vol") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
---------------:lady_beetle:---------------

*You need to* **join** *a voice channel first!*

---------------:lady_beetle:---------------`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (!canModifyQueue(message.member)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
---------------:lady_beetle:---------------

*You need to* **join** *a voice channel first!*

---------------:lady_beetle:---------------`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (!args[0]) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
---------------:lady_beetle:---------------

🔊 **The current volume is:** ${queue.volume}%

---------------:lady_beetle:---------------`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (isNaN(args[0])) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
---------------:lady_beetle:---------------

Please use a number to set volume.

---------------:lady_beetle:---------------`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (Number(args[0]) > 100 || Number(args[0]) < 0) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
---------------:lady_beetle:---------------

Please use a number between 0 - 100.

---------------:lady_beetle:---------------`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        queue.volume = args[0];
        queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
        message.react("✅");
        message.react("🍧");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`**User:** ${message.author}
---------------:lady_beetle:---------------

Volume set to: **${args[0]}%**

---------------:lady_beetle:---------------`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
    } catch (ErrorApril) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setTitle("🔺ERROR CAUGHT🔻")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png").setDescription(`
**April** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorApril}*`)
      );
      console.error(ErrorApril);
    }
  },
};

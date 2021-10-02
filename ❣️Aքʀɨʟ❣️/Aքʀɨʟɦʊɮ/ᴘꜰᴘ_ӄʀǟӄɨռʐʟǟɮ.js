const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
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
  name: "pfp",
  cooldown: 3,
  // =============================================================================================================================
  //
  //
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  //
  //
  // =============================================================================================================================
  execute(message) {
    try {
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        const embedfactor = new MessageEmbed()
          .setColor("#FF5F15")
          .setTitle("😲𝗪𝗔𝗥𝗡𝗜𝗡𝗚⚠️")
          .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
          .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(
            `
**𝕌𝕤𝕖𝕣:** ${message.author}


**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.

`
          );
        message.channel
          .send(embedfactor)
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
        message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("✅");
        message.react("❣️");
        let AvatarEmbed = new MessageEmbed();
        const user = message.mentions.users.first();
        if (!message.mentions.users.first()) {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`);
          AvatarEmbed.setImage(message.author.displayAvatarURL());
          AvatarEmbed.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab");
          AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`);
          message.channel.send(AvatarEmbed);
          return;
        } else {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`);
          AvatarEmbed.setImage(user.displayAvatarURL());
          AvatarEmbed.setFooter(
            "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          );
          AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`);
          message.channel.send(AvatarEmbed);
          return;
        }
      }
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
          .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png").setDescription(`
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

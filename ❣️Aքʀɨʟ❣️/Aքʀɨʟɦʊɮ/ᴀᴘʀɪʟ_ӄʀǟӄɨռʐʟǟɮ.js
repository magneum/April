const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
module.export = {
  name: "april",
  cooldown: 3,
  execute(message) {
    try {
      const AprilNore = `

•> **❣️April** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **❣️April** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁\n
•> use **${AքʀɨʟʄɨӼ}help** to learn how to use **❣️April**`;
      if (message.content.startsWith(AքʀɨʟʄɨӼ + "april")) {
        message.react("✅");
        message.react("❣️");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${AprilNore}`)
              .setColor("#ff0000")
              .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/https://i.postimg.cc/s2JFYVWt/A-M.gif/APril-Gif.gif`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${AprilNore}`)
              .setColor("#ff0000")
              .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/https://i.postimg.cc/s2JFYVWt/A-M.gif/APril-Gif.gif`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
    } catch (ErrorApril) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setAuthor("Error🔺Caught")
          .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
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

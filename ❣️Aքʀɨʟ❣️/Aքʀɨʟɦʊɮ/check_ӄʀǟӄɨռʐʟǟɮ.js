const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
//                                                     GNU GENERAL PUBLIC LICENSE
//                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "krak",
  cooldown: 3,
  async execute(message) {
    if (message.content.startsWith(AքʀɨʟʄɨӼ + "krak")) {
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
`)
        )
        .catch(console.error);
    }
  },
};

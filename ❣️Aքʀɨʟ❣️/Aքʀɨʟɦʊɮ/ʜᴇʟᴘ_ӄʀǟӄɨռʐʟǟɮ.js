const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
  name: "help",
  execute(message) {
    try {
      const ᴀᴘʀɪʟʜᴇʟᴘᴇʀ = `
* ♥️•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **${AքʀɨʟʄɨӼ}filter** = Music filters when playing audio.
• **${AքʀɨʟʄɨӼ}help** = Display this commands and descriptions.
• **${AքʀɨʟʄɨӼ}april** = Display the  license and a few more info.
• **${AքʀɨʟʄɨӼ}np** = Show now playing music.
• **${AքʀɨʟʄɨӼ}ping** = Check server ping of client.
• **${AքʀɨʟʄɨӼ}play** = Plays audio from YouTube.
• **${AքʀɨʟʄɨӼ}list** = Play a playlist from YouTube.
• **${AքʀɨʟʄɨӼ}queue** = Show the music queue and now playing.
• **${AքʀɨʟʄɨӼ}rm** = Remove music from the queue.
• **${AքʀɨʟʄɨӼ}resume** = Resume currently playing music.
• **${AքʀɨʟʄɨӼ}shuffle** = Shuffle music queue.
• **${AքʀɨʟʄɨӼ}skipto** =Skip to the selected queue number.

---------------:lady_beetle:---------------

* ♥️•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **⏭** = Skip the currently playing music.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 ${AքʀɨʟʄɨӼ}vol** = Change volume of currently playing music.`;
      if (message.content.startsWith(AքʀɨʟʄɨӼ + "help")) {
        message.react("✅");
        message.react("❣️");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${ᴀᴘʀɪʟʜᴇʟᴘᴇʀ}`)
              .setColor("#ff0000")
              .setAuthor(`😲 Warning! ⚠️`)
              .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${ᴀᴘʀɪʟʜᴇʟᴘᴇʀ}`)
              .setColor("#ff0000")
              .setAuthor(`😲 Warning! ⚠️`)
              .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
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

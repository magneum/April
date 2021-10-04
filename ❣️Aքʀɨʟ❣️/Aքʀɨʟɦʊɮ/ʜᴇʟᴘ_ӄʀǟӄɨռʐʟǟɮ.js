const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
//                                                     GNU GENERAL PUBLIC LICENSE
//                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      //                                                     GNU GENERAL PUBLIC LICENSE
      //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      if (message.content.startsWith(AքʀɨʟʄɨӼ + "help")) {
        message.react("✅");
        message.react("❣️");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${ᴀᴘʀɪʟʜᴇʟᴘᴇʀ}`)
              .setColor("#ff0000")
              .setAuthor(`⚠️Warning!`)
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
          )
          .catch(console.error);
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        //                                                     GNU GENERAL PUBLIC LICENSE
        //                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${ᴀᴘʀɪʟʜᴇʟᴘᴇʀ}`)
              .setColor("#ff0000")
              .setAuthor(`⚠️Warning!`)
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
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
    } catch (ErrorApril) {
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

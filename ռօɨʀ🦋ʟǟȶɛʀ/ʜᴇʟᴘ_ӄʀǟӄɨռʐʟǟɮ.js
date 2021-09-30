const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
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
  name: "help",
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  execute(message) {
    try {
      const NoirHelper = `
=========⚜️=========

📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪
• **${ռօɨʀʄɨӼ}filter** = Music filters when playing audio.
• **${ռօɨʀʄɨӼ}help** = Display all commands and descriptions.
• **${ռօɨʀʄɨӼ}noir** = Display the  license and a few more info.
• **${ռօɨʀʄɨӼ}loop** = Toggle music loop.
• **${ռօɨʀʄɨӼ}np** = Show now playing song.
• **${ռօɨʀʄɨӼ}pause** = Pause the currently playing music.
• **${ռօɨʀʄɨӼ}ping** = Check server ping of client.
• **${ռօɨʀʄɨӼ}play** = Plays audio from YouTube.
• **${ռօɨʀʄɨӼ}list** = Play a playlist from YouTube.
• **${ռօɨʀʄɨӼ}queue** = Show the music queue and now playing.
• **${ռօɨʀʄɨӼ}remove** = Remove song from the queue.
• **${ռօɨʀʄɨӼ}resume** = Resume currently playing music.
• **${ռօɨʀʄɨӼ}shuffle** = Shuffle music queue.
• **${ռօɨʀʄɨӼ}next** = Skip the currently playing song.
• **${ռօɨʀʄɨӼ}skip** = Skip to the selected queue number.
• **${ռօɨʀʄɨӼ}stop** = Stops the music.
• **${ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.`;
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // =============================================================================================================================
      if (message.content.startsWith(ռօɨʀʄɨӼ + "help")) {
        message.react("✅");
        message.react("🍧");
        message.author.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**User:** ${message.author}\n${NoirHelper}`)
              .setColor("#6272a4")
              .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**User:** ${message.author}\n${NoirHelper}`)
              .setColor("#6272a4")
              .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // =============================================================================================================================
    } catch (ErrorNoir) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setTitle("🔺ERROR CAUGHT🔻")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
          .setDescription(`
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

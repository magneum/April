try {
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 💜Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "help",
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // Copyright (C) 2007 Free Software Foundation
    // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
    // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
    // 💜Noir
    // Discord Music YouTube player
    // has been licensed under GNU General Public License
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    execute(message) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "help") &&
        message.channel.name !== "💜noir"
      ) {
        let HELPEMBED = new MessageEmbed()
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

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
• **${ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ");

        message.react("✅");
        message.react("🍧");

        message.channel.send(HELPEMBED).catch(console.error);
        return;
      }
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "help") &&
        message.channel.name === "💜noir"
      ) {
        let HELPEMBED = new MessageEmbed()
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

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
• **${ռօɨʀʄɨӼ}queue** = Show the music Queue and now playing.
• **${ռօɨʀʄɨӼ}remove** = Remove song from the queue.
• **${ռօɨʀʄɨӼ}resume** = Resume currently playing music.
• **${ռօɨʀʄɨӼ}shuffle** = Shuffle music queue.
• **${ռօɨʀʄɨӼ}next** = Skip the currently playing song.
• **${ռօɨʀʄɨӼ}skip** = Skip to the selected queue number.
• **${ռօɨʀʄɨӼ}stop** = Stops the music.
• **${ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ");

        message.react("✅");
        message.react("🍧");
        message.author.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );

        message.author.send(HELPEMBED).catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
              .setDescription(`**👍 ${message.author} 
=========:radio_button:=========

Check your \`direct messages\` 
for a list of *Noir's* Commands!**
`)
          )
          .then((message) => {
            message.delete({
              timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            });
          });
        return;
      }
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
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

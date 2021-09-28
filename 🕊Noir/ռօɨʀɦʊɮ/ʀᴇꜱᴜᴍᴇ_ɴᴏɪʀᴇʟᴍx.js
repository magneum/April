try {
  const {
    ռօɨʀʄɨӼ,
    ռօɨʀքʊʀɢɛʀ,
    canModifyQueue,
  } = require("../noirtem/noir_env");
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "resume",
    cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
    execute(message) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "resume") &&
        message.channel.name !== "💜noir"
      ) {
        message.react("❌");
        message.react("🔥");
        const embedfactor = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`💜Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
          );
        message.channel.send(embedfactor).catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        // });
        // });
        return;
      }

      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "resume") &&
        message.channel.name === "💜noir"
      ) {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          const embedresume1 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

is not playing anymusic yet.....`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedresume1).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          // });
          // });
          return;
        }

        if (!canModifyQueue(message.member)) {
          const embedresume2 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

is not playing anymusic yet.....`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedresume2).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          // });
          // });
          return;
        }

        if (!queue.playing) {
          queue.playing = true;
          queue.connection.dispatcher.resume();
          message.react("✅");
          message.react("🍧");
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#6272a4")
                .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
                .setDescription(`**User:** ${message.author}
=========:radio_button:=========

▶ Resumed the music!`)
            )
            .catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          // });
          // });
          return;
        }

        const embedresume3 = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

The queue is not paused.`
          );
        message.react("❌");
        message.react("🔥");
        message.channel.send(embedresume3).catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        // });
        // });
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

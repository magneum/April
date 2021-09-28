try {
  const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "ping",
    cooldown: 3,
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    execute(message) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "ping") &&
        message.channel.name !== "💜noir"
      ) {
        message.react("❌");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`💜Noir\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`
              )
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });
        return;
      }

      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "ping") &&
        message.channel.name === "💜noir"
      ) {
        message.react("✅");
        message.react("🍧");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}

⌛️Average ping of noir's Server **${Math.round(message.client.ws.ping)}ms**`
              )
          )
          .catch(console.error);
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
  message.channel.send(
    new MessageEmbed()
      .setColor("#DB4434")
      .setTitle("🔺ERROR CAUGHT🔻")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
      .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
      .setDescription(`
**Noir** has encountered an error.

Please either report to 🔰**https://discord.gg/ucPpXWFK**  in discord channel
or
Report to 🔰**@Krakns** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`)
  );
  console.error(ErrorNoir);
}

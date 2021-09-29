const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
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
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
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
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
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

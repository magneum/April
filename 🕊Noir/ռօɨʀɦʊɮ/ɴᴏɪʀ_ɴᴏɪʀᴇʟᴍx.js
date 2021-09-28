try {
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "noir",
    cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
    execute(message) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "noir") &&
        message.channel.name === "💜noir"
      ) {
        let NoirEMBED = new MessageEmbed()
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁\n
•> use **${ռօɨʀʄɨӼ}help** to learn how to use **Noir**
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`);

        message.react("✅");
        message.react("🍧");
        message.author.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );

        message.author.send(NoirEMBED).catch(console.error);
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
for extra info on *Noir* **
`)
          )
          .then((message) => {
            message.delete({
              timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "noir") &&
        message.channel.name !== "💜noir"
      ) {
        let NoirEMBED = new MessageEmbed()
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁\n
•> use **${ռօɨʀʄɨӼ}help** to learn how to use **Noir**
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`);

        message.react("✅");
        message.react("🍧");
        message.channel.send(NoirEMBED).catch(console.error);
        return;
      }
    },
  };
} catch (ErrorNoir) {
  message.channel.send(
    new MessageEmbed()
      .setColor("#DB4434")
      .setTitle("🔺ERROR CAUGHT🔻")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
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
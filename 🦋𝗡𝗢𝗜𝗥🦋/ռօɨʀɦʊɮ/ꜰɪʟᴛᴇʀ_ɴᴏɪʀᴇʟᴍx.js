const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { ռօɨʀքʟǟʏɛʀ } = require("./ռօɨʀքʟǟʏɛʀ");
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
  name: "filter",
  cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  async execute(message, args, client) {
    if (
      message.content.startsWith(ռօɨʀʄɨӼ + "filter") &&
      message.channel.name !== "💜noir"
    ) {
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
            .setDescription(`
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`💜Noir\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`)
        )
        .catch(console.error);
      // .then((message) => {
      // message.delete({
      // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
      // });
      // });
      return;
    }

    const { channel } = message.member.voice;
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) {
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
            .setDescription(`
**User:** ${message.author}
=========⚜️=========

**Nothing in Queue!**
*Add music in Queue first!*`)
        )
        .catch(console.error);
      // .then((message) => {
      // message.delete({
      // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
      // });
      // });
      return;
    }
    if (queue.length !== 0) {
      if (!args.length) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`
**User:** ${message.author}
=========⚜️=========

**usage:** \`${ռօɨʀʄɨӼ}filter\`
▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`)
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });
        return;
      }
    }

    if (
      message.content.startsWith(ռօɨʀʄɨӼ + "filter") &&
      message.channel.name === "💜noir"
    ) {
      if (!message.member.voice.channel) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`
**User:** ${message.author}
=========⚜️=========

*Please join a* **Voice Channel** *first*`)
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });
        return;
      }

      if (queue && channel !== message.guild.me.voice.channel) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`
**User:** ${message.author}
=========⚜️=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });

        return;
      }

      const filters = [
        "bass=g=20,dynaudnorm=f=200",
        "apulsator=hz=0.08",
        "aresample=48000,asetrate=48000*1.25",
        "surround",
        "asubboost",
        "remove",
      ];

      let NoirEffectNum;
      let NoirSelected;
      switch (args[0]) {
        case "bassboost":
          NoirEffectNum = 0;
          break;
        case "8D":
          NoirEffectNum = 1;
          break;
        case "nightcore":
          NoirEffectNum = 2;
          break;
        case "surrounding":
          NoirEffectNum = 3;
          break;
        case "subboost":
          NoirEffectNum = 4;
          break;
        case "clear":
          NoirEffectNum = 5;
          break;
        default:
          NoirEffectNum = 404;
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setFooter(`**Example:** ${ռօɨʀʄɨӼ}filter bassboost`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========
**That was not a valid filter!**

▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          break;
      }

      NoirSelected = filters[NoirEffectNum];
      if (NoirEffectNum === 404) {
        return;
      }
      try {
        const song = queue.songs[0];
        message.react("✅");
        message.react("🍧");
        message.channel.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
            .setAuthor(
              "Applied Filter = " + args[0],
              "https://cdn.discordapp.com/emojis/769935094285860894.gif"
            )
        );
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });

        ռօɨʀքʟǟʏɛʀ(song, message, client, NoirSelected);
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#AE4A3B")
              .setTitle("PLEASE RESTART MUSIC QUEUE !")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`
**User:** ${message.author}
=========⚜️=========

*Song Queue has been cleaned up.*
Restart **queue** and **filter** will be applied.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 20000,
            });
          });
        return;
      } catch (error) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(`
**User:** ${message.author}
=========⚜️=========

**Nothing in Queue!**
*Add music in Queue first!*`)
          )
          .catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        // });
        // });
        return;
      }
    }
  },
};

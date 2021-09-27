const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { play } = require("./🕊Noir");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🕊Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  name: "filter",
  cooldown: 3,
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  async execute(message, args, client) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "filter") &&
      message.channel.name !== "🕊noir"
    ) {
      message.react("❌");
      const embedfilter0 = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
        ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🕊Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`);
      message.channel
        .send(embedfilter0)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    // ==================================================================
    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    const { channel } = message.member.voice;
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) {
      const embednone1 = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
        ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

**Nothing in Queue!**
*Add music in Queue first!*`);
      message.react("❌");
      message.channel
        .send(embednone1)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (queue.length !== 0) {
      if (!args.length) {
        const embedfilter1 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

**usage:** \`${ʙᴏᴛꜰɪx}filter\`
▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`);
        message.react("❌");
        message.channel.send(embedfilter1).catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        //   });
        // });
        return;
      }
    }
    // ==================================================================
    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "filter") &&
      message.channel.name === "🕊noir"
    ) {
      // message.react("✅");
      if (!message.member.voice.channel) {
        const embedfilter2 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

*Please join a* **Voice Channel** *first*`);
        message.react("❌");
        message.channel
          .send(embedfilter2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      if (queue && channel !== message.guild.me.voice.channel) {
        const embedfilter3 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`);
        message.react("❌");
        message.channel
          .send(embedfilter3)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });

        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const filters = [
        "bass=g=20,dynaudnorm=f=200",
        "apulsator=hz=0.08",
        "aresample=48000,asetrate=48000*1.25",
        "surround",
        "asubboost",
        "remove",
      ];
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
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
          const embedfilter4 = new MessageEmbed()
            .setColor("#20ab40")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
            .setFooter(`**Example:** ${ʙᴏᴛꜰɪx}filter bassboost`)
            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
            ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========
**That was not a valid filter!**

▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`);
          message.react("❌");
          message.channel
            .send(embedfilter4)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          break;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      NoirSelected = filters[NoirEffectNum];
      if (NoirEffectNum === 404) {
        return;
      }
      try {
        const song = queue.songs[0];
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#20ab40")
              .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
              .setFooter(
                "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
              )
              .setAuthor(
                "Applying: " + args[0],
                "https://cdn.discordapp.com/emojis/769935094285860894.gif"
              )
          )
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        play(song, message, client, NoirSelected);
        const embedfiltersongend = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Song Queue has been cleaned up.
Restarted queue and filter is applied.`);
        message.react("❌");
        message.channel
          .send(embedfiltersongend)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 20000,
            });
          });
      } catch (error) {
        const embednone2 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

**Nothing in Queue!**
*Add music in Queue first!*`);
        message.react("❌");
        message.channel
          .send(embednone2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
    }
  },
};

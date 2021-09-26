const { MessageEmbed } = require("../VoidKrate.js");
const { play } = require("./noir🍀player");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  name: "filter",
  cooldown: 3,
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  async execute(message, args, client) {
    if (!message.guild) {
      return;
    }
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "filter") &&
      message.channel.name !== "noir🍀player"
    ) {
      const embedfilter0 = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

**Channel:** \`noir🍀player\`
Please use 👆🏻 channel for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands.`);
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
    // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
    // ==================================================================
    const { channel } = message.member.voice;
    const queue = message.client.queue.get(message.guild.id);
    if (!args.length) {
      const embedfilter1 = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

**usage:** ${ʙᴏᴛꜰɪx}filter

- bassboost
- 8D
- vaporwave
- nightcore
- phaser
- tremolo
- vibrato
- surrounding
- pulsator
- subboost
- clear   ---  removes all filter(s) applied`);
      message.channel
        .send(embedfilter1)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    // ==================================================================
    // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
    // ==================================================================
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "filter") &&
      message.channel.name === "noir🍀player"
    ) {
      if (!message.member.voice.channel) {
        const embedfilter2 = new MessageEmbed()
          .setColor("#32CD32")
          .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

Please join a Voice Channel first`);
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
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      if (queue && channel !== message.guild.me.voice.channel) {
        const embedfilter3 = new MessageEmbed()
          .setColor("#32CD32")
          .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`);
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
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      const filters = [
        //bassboost
        "bass=g=20,dynaudnorm=f=200",
        //8D
        "apulsator=hz=0.08",
        //vaporwave
        "aresample=48000,asetrate=48000*0.8",
        //nightcore
        "aresample=48000,asetrate=48000*1.25",
        //phaser
        "aphaser=in_gain=0.4",
        //tremolo
        "tremolo",
        //vibrato
        "vibrato=f=6.5",
        //surrounding
        "surround",
        //pulsator
        "apulsator=hz=1",
        //subboost
        "asubboost",
        "remove",
      ];
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      let varforfilter;
      let choice;
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      switch (args[0]) {
        case "bassboost":
          varforfilter = 0;
          break;
        case "8D":
          varforfilter = 1;
          break;
        case "vaporwave":
          varforfilter = 2;
          break;
        case "nightcore":
          varforfilter = 3;
          break;
        case "phaser":
          varforfilter = 4;
          break;
        case "tremolo":
          varforfilter = 5;
          break;
        case "vibrato":
          varforfilter = 6;
          break;
        case "surrounding":
          varforfilter = 7;
          break;
        case "pulsator":
          varforfilter = 8;
          break;
        case "subboost":
          varforfilter = 9;
          break;
        case "clear":
          varforfilter = 10;
          break;
        default:
          varforfilter = 404;
          message.channel.send(
            new MessageEmbed()
              .setColor("#32CD32")
              .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setTitle("Not a valid Filter, use one of those:")
              .setDescription(
                `
- bassboost
- 8D
- vaporwave
- nightcore
- phaser
- tremolo
- vibrato
- surrounding
- pulsator
- subboost
- clear   ---  removes all filters`
              )
              .setFooter(`**Example:** ${ʙᴏᴛꜰɪx}filter bassboost`)
          );
          break;
      }
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      choice = filters[varforfilter];
      if (varforfilter === 404) return;
      try {
        const song = queue.songs[0];
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#32CD32")
              .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
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
        // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
        // ==================================================================
        play(song, message, client, choice);
      } catch (error) {
        const embednone = new MessageEmbed()
          .setColor("#32CD32")
          .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
          .setDescription(`\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

**Nothing in Queue!**
*Add music in Queue first!*`);
        message.channel
          .send(embednone)
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

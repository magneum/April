const { play } = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
//                                                     GNU GENERAL PUBLIC LICENSE
//                                         𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "filter",
  cooldown: 3,

  async execute(message, args, client) {
    try {
      if (!message.guild) {
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "filter") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69159")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`⚠️Warning!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
              .setDescription(`**Ú§êr >** ${message.author}
**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "filter") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        const { channel } = message.member.voice;
        const queue = message.client.queue.get(message.guild.id);
        message.react("✅").catch(console.error);
        if (message.channel.activeCollector) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}
There is a search active!`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
        }
        if (!message.member.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}
*Please join a* **Voice Channel** *first*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }

        if (queue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#e69159")
                .setTitle("April❣️Music by🔱KrakinzLab™️")
                .setAuthor(`⚠️Warning!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                .setDescription(`**Ú§êr >** ${message.author}
You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }

        const filters = [
          "bass=g=20,dynaudnorm=f=200", //bassboost
          "apulsator=hz=0.08", //8D
          "aresample=48000,asetrate=48000*0.8", //vaporwave
          "aresample=48000,asetrate=48000*1.25", //nightcore
          "aphaser=in_gain=0.4", //phaser
          "tremolo", //tremolo
          "vibrato=f=6.5", //vibrato
          "surround", //surrounding
          "apulsator=hz=1", //pulsator
          "asubboost", //subboost
          "remove",
        ];

        let varforfilter;
        let choice;
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
            message.react("❌");
            message.react("🔥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#e69159")
                  .setTitle("April❣️Music by🔱KrakinzLab™️")
                  .setAuthor(`⚠️Warning!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  .setFooter(`**Example:** ${AքʀɨʟʄɨӼ}filter bassboost`)
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
                  .setDescription(`**Ú§êr >** ${message.author}
**That was not a valid filter!**

\`bassboost\`
\`8D\`
\`vaporwave\`
\`nightcore\`
\`phaser\`
\`tremolo\`
\`vibrato\`
\`surrounding\`
\`pulsator\`
\`subboost\`
\`clear\`   ---  removes all filters

**Example:** ${AքʀɨʟʄɨӼ}filter bassboost`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            break;
        }
        choice = filters[varforfilter];
        if (varforfilter === 404) return;
        try {
          const song = queue.songs[0];
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#ff0040")
                .setAuthor(
                  "Applying: " + args[0],
                  "https://cdn.discordapp.com/emojis/769935094285860894.gif"
                )
            )
            .then((msg) => {
              msg.delete({ timeout: 2000 });
            });
          play(song, message, client, choice);
        } catch (error) {
          console.error(error);
          message.channel.activeCollector = false;
        }
      }
    } catch (ErrorApril) {
      message.channel.send("@everyone");
      message.client.channels.cache
        .get("894574779561017384")
        .send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setAuthor(`⚠️Warning!`)
            .setTitle("April❣️Music by🔱KrakinzLab™️")
            .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021-Krakinz™️🔱KrakinzLab™️")
            .setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**
**Error report:**
*${ErrorApril}*`)
        )
        .catch(console.error);

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

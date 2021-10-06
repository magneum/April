const { canModifyQueue, AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "skipto",
  cooldown: 4,
  execute(message, args) {
    try {
      if (message.author.bot) {
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "skipto") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#ffc02b")
              .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(`❣️| ${message.author}

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
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "skipto") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        if (!args.length || isNaN(args[0])) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#ffc02b")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️| ${message.author}

⚓️**usage:**
${AքʀɨʟʄɨӼ}skipto [Queue Number]`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#ffc02b")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️| ${message.author}

There is nothing playing that I could skip for you.`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (!canModifyQueue(message.member)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#ffc02b")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️| ${message.author}

*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (args[0] > queue.songs.length) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#ffc02b")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️| ${message.author}

There is nothing playing that I could skip for you.`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        queue.playing = true;
        if (queue.loop) {
          for (let i = 0; i < args[0] - 2; i++) {
            queue.songs.push(queue.songs.shift());
          }
        } else {
          queue.songs = queue.songs.slice(args[0] - 2);
        }
        queue.connection.dispatcher.end();

        message.react("✅");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ffffff")
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(`❣️| ${message.author}

⏹ stopped the music!`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
    } catch (ErrorApril) {
      message.channel.send("@everyone");
      message.Aքʀɨʟʍʊֆɨƈ.channels.cache
        .get("894958787792871475")
        .send(
          new MessageEmbed()
            .setColor("#ff7800")
            .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
            .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
            .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️").setDescription(`
  **Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**
  
  **Error report:**
  *${ErrorApril}*`)
        )
        .catch(console.error);
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      message.channel.send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor("Error🔺Caught")
          .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
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

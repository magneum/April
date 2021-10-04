const { canModifyQueue } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");

module.exports = {
  name: "pause",
  execute(message) {
    if (
      message.content.startsWith(AքʀɨʟʄɨӼ + "pause") &&
      message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
    ) {
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#FF5F15")
            .setTitle("April❣️Music by🔱KrakinzLab™️")
            .setAuthor(`😲 Warning! ⚠️`)
            .setURL("https://github.com/Krakinz?tab=repositories")
            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(
              `\n\n
**Ú§êr >** ${message.author}


**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`
            )
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
      message.content.startsWith(AքʀɨʟʄɨӼ + "pause") &&
      message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
    ) {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        return;
      }
      if (!canModifyQueue(member)) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`😲 Warning! ⚠️`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
              .setDescription(`**Ú§êr >** ${message.author}
**You need to join a voice channel first!**`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }

      if (queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause(true);
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`😲 Warning! ⚠️`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
              .setDescription(`**Ú§êr >** ${message.author}
🚦 **Paused the music.**`)
          )
          .catch(console.error);
      }
    }
  },
};

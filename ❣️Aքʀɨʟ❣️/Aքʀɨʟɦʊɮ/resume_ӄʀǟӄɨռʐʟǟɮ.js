const { canModifyQueue } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");


module.exports = {
  name: "resume",
  execute(message) {
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

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel
        .send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setAuthor(`😲 Warning! ⚠️`)
            .setURL("https://github.com/Krakinz?tab=repositories")
            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(`**Ú§êr >** ${message.author}
▶ **Resumed the music!**`)
        )
        .catch(console.error);
    } else {
      return queue.textChannel
        .send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setAuthor(`😲 Warning! ⚠️`)
            .setURL("https://github.com/Krakinz?tab=repositories")
            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(`**Ú§êr >** ${message.author}
Error `)
        )
        .catch(console.error);
    }
  },
};

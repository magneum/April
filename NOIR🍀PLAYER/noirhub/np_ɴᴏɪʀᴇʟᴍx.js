const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { splitBar } = require("string-progressbar");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");

module.exports = {
  name: "np",
  cooldown: 3,

  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name !== "noir🎶player"
    ) {
      message.react("❌");
      const embedfactor = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`noir🎶player\`
Please use 👆🏻 channel for any **ɴᴏɪʀ** commands.`
        );
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }

    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embednp1 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

Noir is not playing anymusic yet....`
          );
        message.react("❌");
        message.channel
          .send(embednp1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      const song = queue.songs[0];
      const seek =
        (queue.connection.dispatcher.streamTime -
          queue.connection.dispatcher.pausedTime) /
        1000;
      const left = song.duration - seek;

      let current = new MessageEmbed()
        .setTitle("**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n*Now playing*")
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(`${song.title}\n${song.url}`)
        .setColor("#20ab40")
        .setAuthor(message.client.user.username);

      if (song.duration > 0) {
        current.addField(
          `\u200b`,
          new Date(seek * 1000).toISOString().substr(11, 8) +
            `[` +
            splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
            `]` +
            (song.duration == 0
              ? ` ◉ LIVE`
              : new Date(song.duration * 1000).toISOString().substr(11, 8)),
          false
        );
        current.setFooter(
          `⏱Time Remaining: ${new Date(left * 1000)
            .toISOString()
            .substr(11, 8)}`
        );
      }
      return message.channel.send(current);
    }
  },
};

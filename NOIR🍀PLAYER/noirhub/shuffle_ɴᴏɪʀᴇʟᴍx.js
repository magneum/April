const { canModifyQueue, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");

module.exports = {
  name: "shuffle",
  cooldown: 3,

  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") &&
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
      message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embedshuf1 = new MessageEmbed()
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

There is no queue.`
          );
        message.react("❌");
        message.channel
          .send(embedshuf1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (!canModifyQueue(message.member)) {
        const embedshuf2 = new MessageEmbed()
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

You need to join a voice channel first!`
          );
        message.react("❌");
        message.channel
          .send(embedshuf2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      let songs = queue.songs;
      for (let i = songs.length - 1; i > 1; i--) {
        let j = 1 + Math.floor(Math.random() * i);
        [songs[i], songs[j]] = [songs[j], songs[i]];
      }

      queue.songs = songs;
      message.client.queue.set(message.guild.id, queue);
      queue.textChannel
        .send(
          new MessageEmbed()
            .setColor("#20ab40")
            .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setFooter(
              "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
            ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔀 Shuffled the queue`)
        )
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
    }
  },
};

const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "shuffle",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") && message.channel.name !== "🦋noir🎧player🦋") {
      const embedfactor = new MessageEmbed()
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
**⚠️WARNING⚠️** 
**User:** ${message.author}
**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**

•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${AUTOCLEANER}`
          });
        });
      return;
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") && message.channel.name === "🦋noir🎧player🦋") {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > There is no queue.")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${AUTOCLEANER}`
            });
          })
        return;
      }
      if (!canModifyQueue(message.member)) {
        message.channel.send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > You need to join a voice channel first!")
        return;
      }
      let songs = queue.songs;
      for (let i = songs.length - 1; i > 1; i--) {
        let j = 1 + Math.floor(Math.random() * i);
        [songs[i], songs[j]] = [songs[j], songs[i]];
      }
      queue.songs = songs;
      message.client.queue.set(message.guild.id, queue);
      queue.textChannel.send(`${message.author}>\n\n**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > 🔀 Shuffled the queue`)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${AUTOCLEANER}`
          });
        });
    }
  }
};
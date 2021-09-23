const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pause",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "pause") && message.channel.name !== "🦋noir🎧player🦋") {
      const embedfactor = new MessageEmbed()
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
**⚠️WARNING⚠️** 
**User:** ${message.author}
**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**

•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: 10000
          });
        });
      return;
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "pause") && message.channel.name === "🦋noir🎧player🦋") {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** is not playing anymusic yet.....")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (!canModifyQueue(message.member)) {
        message.channel.send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** You need to join a voice channel first!")
        return;
      }
      if (queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause(true);
        queue.textChannel.send(`${message.author}\n**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** 🚦 Paused the music.`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
    }
  }
};
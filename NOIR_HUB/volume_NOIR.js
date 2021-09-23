const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "vol",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "vol") && message.channel.name !== "🦋noir🎧player🦋") {
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
            timeout: 10000
          });
        });
      return;
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "vol") && message.channel.name === "🦋noir🎧player🦋") {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** is not playing anymusic yet.....")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (!canModifyQueue(message.member)) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** You need to join a voice channel first!")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (!args[0]) {
        message.channel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** 🔊 **The current volume is:** ${queue.volume}%`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (isNaN(args[0])) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Please use a number to set volume.")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (Number(args[0]) > 100 || Number(args[0]) < 0) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Please use a number between 0 - 100.")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      queue.volume = args[0];
      queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
      queue.textChannel.send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Volume set to: **${args[0]}%**`)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: 10000
          });
        })
      return;
    }
  }
};

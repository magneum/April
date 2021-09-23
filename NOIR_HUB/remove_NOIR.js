const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "remove",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name !== "🦋noir🎧player🦋") {
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
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name === "🦋noir🎧player🦋") {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** There is no queue.")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      if (!canModifyQueue(message.member)) {
        message.channel.send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** You need to join a voice channel first!")
        return;
      }
      if (!args.length) {
        message.channel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** ⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`)
        return;
      }
      const arguments = args.join(``);
      const songs = arguments.split(`,`).map((arg) => parseInt(arg));
      let removed = [];
      if (pattern.test(arguments)) {
        queue.songs = queue.songs.filter((item, index) => {
          if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
          else return true;
        });
        queue.textChannel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** ❌ Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`);
      } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
        console.log(`we got elsed!`);
        return queue.textChannel.send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** ❌ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`);
      } else {
        console.log(`we got the last one`);
        message.channel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** ⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`)
        return;
      }
    }
  }
};
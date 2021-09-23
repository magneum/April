const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "skipto",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") && message.channel.name !== "🦋noir🎧player🦋") {
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
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") && message.channel.name === "🦋noir🎧player🦋") {
      if (!args.length || isNaN(args[0])) {
        message.channel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > ⚓️**usage:**${ʙᴏᴛꜰɪx}{name} <Queue Number>`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${AUTOCLEANER}`
            });
          })
        return;
      }
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > There is nothing playing that I could skip for you.")
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
      if (args[0] > queue.songs.length) {
        message.channel
          .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > The queue is only ${queue.songs.length} songs long!`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${AUTOCLEANER}`
            });
          })
        return;
      }
      queue.playing = true;
      if (queue.loop) {
        for (let i = 0; i < args[0] - 2; i++) {
          queue.songs.push(queue.songs.shift());
        }
      } else {
        queue.songs = queue.songs.slice(args[0] - 2);
      }
      queue.connection.dispatcher.end();
      queue.textChannel.send(`${message.author}>\n\n**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > ❌ stopped the music!`)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${AUTOCLEANER}`
          });
        });
    }
  }
};
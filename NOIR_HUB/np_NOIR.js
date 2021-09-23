const { MessageEmbed } = require("discord.js");
const { splitBar } = require("string-progressbar");
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");

module.exports = {
  name: "np",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "np") && message.channel.name !== "🦋noir🎧player🦋") {
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
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "np") && message.channel.name === "🦋noir🎧player🦋") {
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
      const song = queue.songs[0];
      const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
      const left = song.duration - seek;
      let current = new MessageEmbed()
        .setTitle("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Now playing")
        .setDescription(`${song.title}\n${song.url}`)
        .setColor(`#F8AA2A`)
        .setAuthor(message.client.user.username);
      if (song.duration > 0) {
        current.addField(`\u200b`, new Date(seek * 1000).toISOString().substr(11, 8) + `[` + splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] + `]` + (song.duration == 0 ? ` ◉ LIVE` : new Date(song.duration * 1000).toISOString().substr(11, 8)), false);
        current.setFooter(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** ⏱Time Remaining: ${new Date(left * 1000).toISOString().substr(11, 8)}`)
      };
      return message.channel
        .send(current);
    }
  }
};
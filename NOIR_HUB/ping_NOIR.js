const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "ping",
  cooldown: 10,


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "ping") && message.channel.name !== "🦋noir🎧player🦋") {
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
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "ping") && message.channel.name === "🦋noir🎧player🦋") {
      message.channel
        .send(`
**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**

⚜️**Noir** ⌛️Average ping of 𝗡𝗢𝗜𝗥's Server: 
${Math.round(message.client.ws.ping)}ms`)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: 5000
          });
        })
      return;
    }
  }
};
const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../NOIR_SYSTEM/noir_env");



const NOIRED = `
=• **🦋NOIR🦋** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n\n
=• use ${PREFIX}help to learn how to use **🦋NOIR🦋**\n\n
=• **🦋NOIR🦋** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀`



module.exports = {
  name: "noir",



  execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }

    let Embed = new MessageEmbed()
      .setFooter("—••÷=======[ 🦋NOIR🦋 ]=======÷•—")
      .setDescription(NOIRED)
      .setImage("https://telegra.ph/file/805a9684da89a5dcac320.jpg")
      .setColor("0x1f8b4c");
    Embed.setTimestamp();
    try {
      return message.channel.send(Embed);
    }
    catch (error) {
      console.error(error);
    }
  }
};
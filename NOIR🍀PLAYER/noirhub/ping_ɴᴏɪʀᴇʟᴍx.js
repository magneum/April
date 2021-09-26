const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🎶player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  name: "ping",
  cooldown: 3,
  // ==================================================================
  // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "ping") &&
      message.channel.name !== "noir🎶player"
    ) {
      message.react("💢");
      const embedfactor = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
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
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "ping") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const embedping = new MessageEmbed()
        .setColor("#20ab40")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `
**User:** ${message.author}

⌛️Average ping of noir's Server **${Math.round(message.client.ws.ping)}ms**`
        );
      message.channel
        .send(embedping)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
  },
};

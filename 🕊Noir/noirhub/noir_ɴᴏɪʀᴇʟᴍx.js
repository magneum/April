const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🕊Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  name: "noir",
  cooldown: 3,
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "noir") &&
      message.channel.name === "🕊noir"
    ) {
      let NoirEMBED = new MessageEmbed()
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
        )
        .setDescription(
          `**User:** ${message.author}
=========:radio_button:=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀\n
•> use **${ʙᴏᴛꜰɪx}help** to learn how to use **Noir**
`
        )
        .setColor("#20ab40")
        .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`);
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      message.react("✅");
      message.author.send(
        new MessageEmbed()
          .setColor("#20ab40")
          .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
      );
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      message.author.send(NoirEMBED).catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#20ab40")
            .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
            .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
            ).setDescription(`**👍 ${message.author} 
=========:radio_button:=========

Check your \`direct messages\` 
for extra info on *Noir* **
`)
        )
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "noir") &&
      message.channel.name !== "🕊noir"
    ) {
      let NoirEMBED = new MessageEmbed()
        .setFooter(
          "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
        )
        .setDescription(
          `**User:** ${message.author}
=========:radio_button:=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀\n
•> use **${ʙᴏᴛꜰɪx}help** to learn how to use **Noir**
`
        )
        .setColor("#20ab40")
        .setAuthor(`•> 🕊Noir by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`);
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      message.react("✅");
      message.channel.send(NoirEMBED).catch(console.error);
      return;
    }
  },
};

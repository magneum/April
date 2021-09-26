const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");

module.exports = {
  name: "noir",
  cooldown: 3,

  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "noir") &&
      message.channel.name === "noir🎶player"
    ) {
      let NOIREMBED = new MessageEmbed()
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `**User:** ${message.author}
=========:radio_button:=========

•> **NOIR** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **NOIR** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀\n
•> use **${ʙᴏᴛꜰɪx}help** to learn how to use **NOIR**
`
        )
        .setColor("#20ab40")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`);

      message.react("✅");
      message.author.send(
        new MessageEmbed()
          .setColor("#20ab40")
          .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
      );

      message.author.send(NOIREMBED).catch(console.error);
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#20ab40")
            .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
            .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setFooter(
              "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
            ).setDescription(`**👍 ${message.author} 
=========:radio_button:=========

Check your \`direct messages\` 
for extra info on *NOIR* **
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
      message.channel.name !== "noir🎶player"
    ) {
      let NOIREMBED = new MessageEmbed()
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `**User:** ${message.author}
=========:radio_button:=========

•> **NOIR** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **NOIR** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀\n
•> use **${ʙᴏᴛꜰɪx}help** to learn how to use **NOIR**
`
        )
        .setColor("#20ab40")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/159gtVVq/image.jpg`);

      message.react("✅");
      message.channel.send(NOIREMBED).catch(console.error);
      return;
    }
  },
};

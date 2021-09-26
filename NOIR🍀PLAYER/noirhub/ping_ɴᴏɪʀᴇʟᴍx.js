const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");

module.exports = {
  name: "ping",
  cooldown: 3,

  execute(message) {
    //     if (
    //       message.content.startsWith(ʙᴏᴛꜰɪx + "ping") &&
    //       message.channel.name !== "noir🎶player"
    //     ) {
    //       message.react("❌")
    //       const embedfactor = new MessageEmbed()
    //         .setColor("#20ab40")
    //         .setTitle("⚠️Warning⚠️")
    //         .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
    //         .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
    //         .setFooter(
    //           "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
    //         )
    //         .setDescription(
    //           `
    // **User:** ${message.author}
    // =========:radio_button:=========

    // **Channel:** \`noir🎶player\`
    // Please use 👆🏻 channel for any **ɴᴏɪʀ** commands.`
    //         );
    //       message.channel
    //         .send(embedfactor)
    //         .catch(console.error)
    //         .then((message) => {
    //           message.delete({
    //             timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
    //           });
    //         });
    //       return;
    //     }

    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "ping") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const embedping = new MessageEmbed()
        .setColor("#20ab40")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
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

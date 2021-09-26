const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");

module.exports = {
  name: "pfp",
  cooldown: 3,

  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
      message.channel.name !== "noir🎶player"
    ) {
      message.react("❌")
      const embedfactor = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
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

    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      let AvatarEmbed = new MessageEmbed();
      const user = message.mentions.users.first();
      if (!message.mentions.users.first()) {
        AvatarEmbed.setColor("#20ab40");
        AvatarEmbed.setAuthor(`•> Noir🎶Player by HypeVoidSoul`);
        AvatarEmbed.setImage(message.author.displayAvatarURL());
        AvatarEmbed.setFooter(
          "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        );
        AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
        AvatarEmbed.setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`);
        message.channel.send(AvatarEmbed);
        return;
      } else {
        AvatarEmbed.setColor("#20ab40");
        AvatarEmbed.setAuthor(`•> Noir🎶Player by HypeVoidSoul`);
        AvatarEmbed.setImage(user.displayAvatarURL());
        AvatarEmbed.setFooter(
          "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        );
        AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
        AvatarEmbed.setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`);
        message.channel.send(AvatarEmbed);
        return;
      }
    }
  },
};

const { MessageEmbed } = require("discord.js");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");

module.exports = {
  name: "queue",
  cooldown: 5,


  async execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 


    const permissions = message.channel.permissionsFor(message.client.user);
    if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
      return message.reply(noir_loader.__("queue.ПOIЯD_ᴍɪꜱꜱɪɴɢ_ᴘᴇʀᴍɪꜱꜱɪᴏɴ_ᴍᴇꜱꜱᴀɢᴇ"));

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(noir_loader.__("queue.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"));

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);

    const queueEmbed = await message.channel.send(
      `**${noir_loader.__mf("queue.ПOIЯD_ᴄᴜʀʀᴇɴᴛ_ᴘᴀɢᴇ")} ${currentPage + 1}/${embeds.length}**`,
      embeds[currentPage]
    );

    try {
      await queueEmbed.react("⬅️");
      await queueEmbed.react("❌");
      await queueEmbed.react("➡️");
    } catch (error) {
      console.error(error);
      message.channel.send(error.message).catch(console.error);
    }

    const filter = (reaction, user) =>
      ["⬅️", "❌", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
    const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });

    collector.on("collect", async (reaction, user) => {
      try {
        if (reaction.emoji.name === "➡️") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit(
              noir_loader.__mf("queue.ПOIЯD_ᴄᴜʀʀᴇɴᴛ_ᴘᴀɢᴇ", { page: currentPage + 1, length: embeds.length }),
              embeds[currentPage]
            );
          }
        } else if (reaction.emoji.name === "⬅️") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit(
              noir_loader.__mf("queue.ПOIЯD_ᴄᴜʀʀᴇɴᴛ_ᴘᴀɢᴇ", { page: currentPage + 1, length: embeds.length }),
              embeds[currentPage]
            );
          }
        } else {
          collector.stop();
          reaction.message.reactions.removeAll();
        }
        await reaction.users.remove(message.author.id);
      } catch (error) {
        console.error(error);
        return message.channel.send(error.message).catch(console.error);
      }
    });
  }
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join("\n");

    const embed = new MessageEmbed()
      .setTitle(noir_loader.__("queue.ПOIЯD_ᴇᴍʙᴇᴅ_ᴛɪᴛʟᴇ"))
      .setThumbnail(message.guild.iconURL())
      .setColor("#F8AA2A")
      .setDescription(
        noir_loader.__mf("queue.ПOIЯD_ᴇᴍʙᴇᴅ_ᴄᴜʀʀᴇɴᴛ_ꜱᴏɴɢ", { title: queue[0].title, url: queue[0].url, info: info })
      )
      .setTimestamp();
    embeds.push(embed);
  }

  return embeds;
}

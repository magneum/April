const { MessageEmbed } = require("discord.js");
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "queue",
  cooldown: 5,

  async execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "queue") && message.channel.name !== "🦋noir🎧player🦋") {
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
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "queue") && message.channel.name === "🦋noir🎧player🦋") {
      const permissions = message.channel.permissionsFor(message.client.user);
      if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
        message.channel.send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Missing permission to manage messages or add reactions")
        return;
      }
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel.send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** ❌ Nothing playing in this server")
        return;
      }
      let currentPage = 0;
      const embeds = generateQueueEmbed(message, queue.songs);
      const queueEmbed = await message.channel.send(`"**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Current Page - ${currentPage + 1}/${embeds.length}`, embeds[currentPage]);
      try {
        await queueEmbed.react(`⬅️`);
        await queueEmbed.react(`❌`);
        await queueEmbed.react(`➡️`);
      } catch (error) {
        console.error(error);
        message.channel.send(error.message)
          .catch(console.error);
      }
      const filter = (reaction, user) =>
        [`⬅️`, `❌`, `➡️`].includes(reaction.emoji.name) && message.author.id === user.id;
      const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });
      collector.on(`collect`, async (reaction, user) => {
        try {
          if (reaction.emoji.name === `➡️`) {
            if (currentPage < embeds.length - 1) {
              currentPage++;
              queueEmbed.edit("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Current Page - ",
                { page: currentPage + 1, length: embeds.length }),
                embeds[currentPage]
            };
          } else if (reaction.emoji.name === `⬅️`) {
            if (currentPage !== 0) {
              --currentPage;
              queueEmbed.edit("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Current Page - ", { page: currentPage + 1, length: embeds.length }), embeds[currentPage]
            };
          } else {
            collector.stop();
            reaction.message.reactions.removeAll();
          }
          await reaction.users.remove(message.author.id);
        } catch (error) {
          console.error(error);
          return message.channel.send(error.message)
            .catch(console.error);
        }
      });
    }
  }
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;
  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;
    const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join(`\n`);
    const embed = new MessageEmbed()
      .setThumbnail("https://telegra.ph/file/3766d80c69f488d850173.jpg")
      .setColor(`#F8AA2A`)
      .setDescription(`****🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋****\n\n⚜️**Current Song** -_[${queue[0].title}]_\n\n⚜️${info}`)
    embeds.push(embed);
  }
  return embeds;
}

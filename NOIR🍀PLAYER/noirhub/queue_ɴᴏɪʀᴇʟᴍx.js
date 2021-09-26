const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");

module.exports = {
  name: "queue",
  cooldown: 3,

  async execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "queue") &&
      message.channel.name !== "noir🎶player"
    ) {
      message.react("❌");
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
      message.content.startsWith(ʙᴏᴛꜰɪx + "queue") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const permissions = message.channel.permissionsFor(message.client.user);
      if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
        const embedqueue1 = new MessageEmbed()
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

Missing permission to manage messages or add reactions`
          );
        message.react("❌");
        message.channel
          .send(embedqueue1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embedqueue2 = new MessageEmbed()
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

🔴 Nothing playing in this server`
          );
        message.react("❌");
        message.channel
          .send(embedqueue2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      let currentPage = 0;
      const embeds = generateQueueEmbed(message, queue.songs);
      const queueEmbed = await message.channel.send(
        `"*Page Num:* - ${currentPage + 1}/${embeds.length}`,
        embeds[currentPage]
      );

      try {
        await queueEmbed.react(`⬅️`);
        await queueEmbed.react(`🔴`);
        await queueEmbed.react(`➡️`);
      } catch (error) {
        console.error(error);
        message.channel.send(error.message).catch(console.error);
      }

      const filter = (reaction, user) =>
        [`⬅️`, `🔴`, `➡️`].includes(reaction.emoji.name) &&
        message.author.id === user.id;
      const collector = queueEmbed.createReactionCollector(filter, {
        time: 60000,
      });

      collector.on(`collect`, async (reaction, user) => {
        try {
          if (reaction.emoji.name === `➡️`) {
            if (currentPage < embeds.length - 1) {
              currentPage++;
              queueEmbed.edit("*Page Num:* - ", {
                page: currentPage + 1,
                length: embeds.length,
              }),
                embeds[currentPage];
            }

          } else if (reaction.emoji.name === `⬅️`) {
            if (currentPage !== 0) {
              --currentPage;
              queueEmbed.edit("*Page Num:* - ", {
                page: currentPage + 1,
                length: embeds.length,
              }),
                embeds[currentPage];
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
  },
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;
  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;
    const info = current
      .map((track) => `${++j} - [${track.title}](${track.url})`)
      .join(`\n`);
    const embed = new MessageEmbed()
      .setThumbnail("https://i.postimg.cc/159gtVVq/image.jpg")
      .setColor("#20ab40")
      .setFooter(
        "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
      )
      .setDescription(
        `**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n\n⚜️**Current Song** -_[${queue[0].title}]_\n\n${info}`
      );
    embeds.push(embed);
  }
  return embeds;
}

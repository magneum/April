// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
const { MessageEmbed } = require("discord.js");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
module.exports = {
  name: "queue",
  cooldown: 3,
  async execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "queue") &&
      message.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

_Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands._`);
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
      message.channel.name === "noir🍀player"
    ) {
      const permissions = message.channel.permissionsFor(message.client.user);
      if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
        const embedqueue1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

Missing permission to manage messages or add reactions`);
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
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

❌ Nothing playing in this server`);
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
        await queueEmbed.react(`❌`);
        await queueEmbed.react(`➡️`);
      } catch (error) {
        console.error(error);
        message.channel.send(error.message).catch(console.error);
      }
      const filter = (reaction, user) =>
        [`⬅️`, `❌`, `➡️`].includes(reaction.emoji.name) &&
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
      .setThumbnail("https://i.postimg.cc/D0rM4dhG/image.png")
      .setColor(`#32CD32`)
      .setDescription(
        `**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n\n⚜️**Current Song** -_[${queue[0].title}]_\n\n${info}`
      );
    embeds.push(embed);
  }
  return embeds;
}

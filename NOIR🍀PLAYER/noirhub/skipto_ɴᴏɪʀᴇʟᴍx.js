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
const { canModifyQueue, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "skipto",
  cooldown: 3,
  execute(noirmsg, args) {
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "skipto") &&
      noirmsg.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands._`);
      noirmsg.channel
        .send(embedfactor)
        .catch(console.error)
        .then((noirmsg) => {
          noirmsg.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "skipto") &&
      noirmsg.channel.name === "noir🍀player"
    ) {
      if (!args.length || isNaN(args[0])) {
        const embedskpto1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

⚓️**usage:**${ʙᴏᴛꜰɪx}{name} <Queue Number>`);
        noirmsg.channel
          .send(embedskpto1)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const queue = noirmsg.client.queue.get(noirmsg.guild.id);
      if (!queue) {
        const embedskpto2 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is nothing playing that I could skip for you.`);
        noirmsg.channel
          .send(embedskpto2)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!canModifyQueue(noirmsg.member)) {
        const embedskpto3 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You need to join a voice channel first!`);
        noirmsg.channel
          .send(embedskpto3)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (args[0] > queue.songs.length) {
        const embedshp1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is nothing playing that I could skip for you.`);
        noirmsg.channel
          .send(embedshp1)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      queue.playing = true;
      if (queue.loop) {
        for (let i = 0; i < args[0] - 2; i++) {
          queue.songs.push(queue.songs.shift());
        }
      } else {
        queue.songs = queue.songs.slice(args[0] - 2);
      }
      queue.connection.dispatcher.end();
      queue.textChannel
        .send(
          `${noirmsg.author}>\n\n**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n❌ stopped the music!`
        )
        .catch(console.error)
        .then((noirmsg) => {
          noirmsg.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
    }
  },
};

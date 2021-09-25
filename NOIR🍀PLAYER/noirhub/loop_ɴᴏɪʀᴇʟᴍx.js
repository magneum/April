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
const { canModifyQueue } = require("../noirtem/noir_env");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "loop",
  cooldown: 3,
  execute(noirmsg) {
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "loop") &&
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
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "loop") &&
      noirmsg.channel.name === "noir🍀player"
    ) {
      const queue = noirmsg.client.queue.get(noirmsg.guild.id);
      if (!queue) {
        const embedloopno1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Noir is not playing anymusic yet.....`);
        noirmsg.channel
          .send(embedloopno1)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!canModifyQueue(noirmsg.member)) {
        const embedloopno2 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You need to join a voice channel first!`);
        noirmsg.channel
          .send(embedloopno2)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      queue.loop = !queue.loop;
      queue.textChannel
        .send(
          `**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\nLoop is now turned ${
            queue.loop
              ? noirmsg.channel.send("ON")
              : noirmsg.channel.send("OFF")
          }**`
        )
        .catch(console.error)
        .then((noirmsg) => {
          noirmsg.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
  },
};

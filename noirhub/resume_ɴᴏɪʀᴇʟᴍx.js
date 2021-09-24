// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🕊player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ, canModifyQueue } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "resume",
  cooldown: 3,
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "resume") &&
      message.channel.name !== "noir🕊player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🕊ᴘʟᴀʏᴇʀ🦋`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

_Please use the channel **noir🕊player** for any 🦋ɴᴏɪʀ🕊ᴘʟᴀʏᴇʀ🦋 commands._`);
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
      message.content.startsWith(ʙᴏᴛꜰɪx + "resume") &&
      message.channel.name === "noir🕊player"
    ) {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embedresume1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`🦋ɴᴏɪʀ🕊ᴘʟᴀʏᴇʀ🦋`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

is not playing anymusic yet.....`);
        message.channel
          .send(embedresume1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!canModifyQueue(message.member)) {
        const embedresume2 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`🦋ɴᴏɪʀ🕊ᴘʟᴀʏᴇʀ🦋`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

is not playing anymusic yet.....`);
        message.channel
          .send(embedresume2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        queue.textChannel
          .send(
            `${message.author}\n\n**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n▶ Resumed the music!`
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const embedresume3 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🕊ᴘʟᴀʏᴇʀ🦋`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

The queue is not paused.`);
      message.channel
        .send(embedresume3)
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

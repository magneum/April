const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { splitBar } = require("string-progressbar");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
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
module.exports = {
  name: "np",
  cooldown: 3,
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
        .setDescription(
          `\n\n
**⚠️Warning⚠️** ${message.author}
=========:radio_button:=========

**Channel:** \`noir🍀player\`
Please use 👆🏻 channel for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands.`
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
    // ==================================================================
    // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
    // ==================================================================
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name === "noir🍀player"
    ) {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embednp1 = new MessageEmbed()
          .setColor("#32CD32")
          .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
          .setDescription(
            `\n\n
**⚠️Warning⚠️** ${message.author}
=========:radio_button:=========

Noir is not playing anymusic yet....`
          );
        message.channel
          .send(embednp1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      const song = queue.songs[0];
      const seek =
        (queue.connection.dispatcher.streamTime -
          queue.connection.dispatcher.pausedTime) /
        1000;
      const left = song.duration - seek;
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      let current = new MessageEmbed()
        .setTitle("**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n*Now playing*")
        .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
        .setDescription(`${song.title}\n${song.url}`)
        .setColor("#32CD32")
        .setAuthor(message.client.user.username);
      // ==================================================================
      // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
      // ==================================================================
      if (song.duration > 0) {
        current.addField(
          `\u200b`,
          new Date(seek * 1000).toISOString().substr(11, 8) +
            `[` +
            splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
            `]` +
            (song.duration == 0
              ? ` ◉ LIVE`
              : new Date(song.duration * 1000).toISOString().substr(11, 8)),
          false
        );
        current.setFooter(
          `⏱Time Remaining: ${new Date(left * 1000)
            .toISOString()
            .substr(11, 8)}`
        );
      }
      return message.channel.send(current);
    }
  },
};

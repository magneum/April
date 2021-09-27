const getVideoId = require("get-video-id");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const { splitBar } = require("string-progressbar");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🤍Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  name: "np",
  cooldown: 3,
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name !== "🤍noir"
    ) {
      message.react("❌");
      message.react("🔥");
      const embedfactor = new MessageEmbed()
        .setColor("#d698bc")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🤍Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
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
    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "np") &&
      message.channel.name === "🤍noir"
    ) {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        const embednp1 = new MessageEmbed()
          .setColor("#d698bc")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

Noir is not playing anymusic yet....`
          );
        message.react("❌");
        message.react("🔥");
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
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const song = queue.songs[0];
      const seek =
        (queue.connection.dispatcher.streamTime -
          queue.connection.dispatcher.pausedTime) /
        1000;
      const left = song.duration - seek;
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const { id } = getVideoId(`${song.url}`);
      let current = new MessageEmbed()
        .setTitle("**🤍Noir**\n*Now playing*")
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
        .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
        .setDescription(`${song.title}\n${song.url}`)
        .setColor("#4b73c1")
        .setAuthor(message.client.user.username);
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
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
      message.react("✅");
      message.react("🍧");
      message.channel.send(current).catch(console.error);
      return;
    }
  },
};

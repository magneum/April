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
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pfp",
  cooldown: 3,
  execute(noirmsg) {
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
      noirmsg.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
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
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
      noirmsg.channel.name === "noir🍀player"
    ) {
      let AvatarEmbed = new MessageEmbed();
      const user = noirmsg.mentions.users.first();
      if (!noirmsg.mentions.users.first()) {
        AvatarEmbed.setColor(`#32CD32`);
        AvatarEmbed.setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`);
        AvatarEmbed.setImage(noirmsg.author.displayAvatarURL());
        AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
        AvatarEmbed.setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`);
        noirmsg.channel.send(AvatarEmbed);
        return;
      } else {
        AvatarEmbed.setColor(`#32CD32`);
        AvatarEmbed.setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`);
        AvatarEmbed.setImage(user.displayAvatarURL());
        AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
        AvatarEmbed.setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`);
        noirmsg.channel.send(AvatarEmbed);
        return;
      }
    }
  },
};

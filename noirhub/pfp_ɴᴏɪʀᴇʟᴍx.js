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
  execute(message) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "prf") &&
      message.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ🦋`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

_Please use the channel **noir🍀player** for any 🦋ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ🦋 commands._`);
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
    let AvatarEmbed = new MessageEmbed();
    const user = message.mentions.users.first();
    if (!message.mentions.users.first()) {
      AvatarEmbed.setColor(`#32CD32`);
      AvatarEmbed.setAuthor(`🦋ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ🦋`);
      AvatarEmbed.setImage(message.author.displayAvatarURL());
      AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
      AvatarEmbed.setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`);
      message.channel.send(AvatarEmbed);
      return;
    } else {
      AvatarEmbed.setColor(`#32CD32`);
      AvatarEmbed.setAuthor(`🦋ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ🦋`);
      AvatarEmbed.setImage(user.displayAvatarURL());
      AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
      AvatarEmbed.setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`);
      message.channel.send(AvatarEmbed);
      return;
    }
  },
};

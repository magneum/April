try {
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 💜Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
name: "pfp",
cooldown: 3,




execute(message) {
if (
message.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
message.channel.name !== "💜noir"
) {
message.react("❌");
const embedfactor = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`•> 💜Noir by HypeVoidSoul`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`💜Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
);
message.channel.send(embedfactor).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (
message.content.startsWith(ʙᴏᴛꜰɪx + "pfp") &&
message.channel.name === "💜noir"
) {
message.react("✅");
message.react("🍧");
let AvatarEmbed = new MessageEmbed();
const user = message.mentions.users.first();
if (!message.mentions.users.first()) {
AvatarEmbed.setColor("#6272a4");
AvatarEmbed.setAuthor(`•> 💜Noir by HypeVoidSoul`);
AvatarEmbed.setImage(message.author.displayAvatarURL());
AvatarEmbed.setFooter(
"🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ"
);
AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
AvatarEmbed.setThumbnail(
`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
);
message.channel.send(AvatarEmbed);
return;
} else {
AvatarEmbed.setColor("#6272a4");
AvatarEmbed.setAuthor(`•> 💜Noir by HypeVoidSoul`);
AvatarEmbed.setImage(user.displayAvatarURL());
AvatarEmbed.setFooter(
"𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
);
AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
AvatarEmbed.setThumbnail(
`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`
);
message.channel.send(AvatarEmbed);
return;
}
}
},
};
} catch (ErrorNoir) {
const ErrorInNoir = new MessageEmbed()
.setColor("#DB4434")
.setTitle("🔺ERROR CAUGHT🔻")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
.setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
message.channel.send(ErrorInNoir);
console.error(ErrorNoir);
}

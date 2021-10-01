const getVideoId = require("get-video-id");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { splitBar } = require("string-progressbar");
const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
module.exports = {
name: "np",
cooldown: 3,
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
execute(message) {
try {
if (
message.content.startsWith(ռօɨʀʄɨӼ + "np") &&
message.channel.name !== "ռօɨʀ💜քʟǟʏɛʀ"
) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
.setDescription(
`
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`ռօɨʀ💜քʟǟʏɛʀ\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`
)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ռօɨʀքʊʀɢɛʀ}`,
// });
// });
return;
}
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
if (
message.content.startsWith(ռօɨʀʄɨӼ + "np") &&
message.channel.name === "ռօɨʀ💜քʟǟʏɛʀ"
) {
const queue = message.client.queue.get(message.guild.id);
if (!queue) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
.setDescription(
`
**User:** ${message.author}
=========⚜️=========

Noir is not playing anymusic yet....`
)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ռօɨʀքʊʀɢɛʀ}`,
// });
// });
return;
}
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
const song = queue.songs[0];
const seek =
(queue.connection.dispatcher.streamTime -
queue.connection.dispatcher.pausedTime) /
1000;
const left = song.duration - seek;
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
const { id } = getVideoId(`${song.url}`);
let current = new MessageEmbed()
.setTitle("**ռօɨʀ💜քʟǟʏɛʀ**\n*Now playing*")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
.setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
.setDescription(`${song.title}\n${song.url}`)
.setColor("#6272a4")
.setAuthor(message.client.user.username);
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
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
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
} catch (ErrorNoir) {
message.channel.send(
new MessageEmbed()
.setColor("#DB4434")
.setTitle("🔺ERROR CAUGHT🔻")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
.setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
.setDescription(`
**Noir** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorNoir}*`)
);
console.error(ErrorNoir);
}
},
};

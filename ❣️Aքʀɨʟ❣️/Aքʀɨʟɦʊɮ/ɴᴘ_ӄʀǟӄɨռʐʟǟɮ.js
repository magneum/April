const getVideoId = require("get-video-id");
const {
MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const {
splitBar
} = require("string-progressbar");
const {
AքʀɨʟʄɨӼ,
Aքʀɨʟքʊʀɢɛʀ
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
name: "np",
cooldown: 3,
execute(message) {
try {
if (message.content.startsWith(AքʀɨʟʄɨӼ + "np") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#FF5F15")
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (message.content.startsWith(AքʀɨʟʄɨӼ + "np") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
const queue = message.client.queue.get(message.guild.id);
if (!queue) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#FF5F15")
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(`**Ú§êr >** ${message.author}

April is not playing anymusic yet....`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
const music = queue.songs[0];
const seek =
(queue.connection.dispatcher.streamTime -
queue.connection.dispatcher.pausedTime) /
1000;
const left = music.duration - seek;
const {
id
} = getVideoId(`${music.url}`);
let current = new MessageEmbed()
.setTitle("**Aքʀɨʟ❣️ʍʊֆɨƈ**\n*Now playing*")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
.setDescription(`${music.title}\n${music.url}`)
.setColor("#ff0000")
.setAuthor(message.client.user.username);
if (music.duration > 0) {
current.addField(
`\u200b`,
new Date(seek * 1000).toISOString().substr(11, 8) +
`[` +
splitBar(
music.duration == 0 ? seek : music.duration,
seek,
20
)[0] +
`]` +
(music.duration == 0 ?
` ◉ LIVE` :
new Date(music.duration * 1000).toISOString().substr(11, 8)),
false
);
current.setFooter(
`⏱Time Remaining: ${new Date(left * 1000)
.toISOString()
.substr(11, 8)}`
);
}
message.react("✅");
message.react("❣️");
message.channel.send(current).catch(console.error);
return;
}
} catch (ErrorApril) {
message.channel.send(
new MessageEmbed()
.setColor("#DB4434")
.setAuthor("Error🔺Caught")
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
.setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns

**Error🔻Caught**
*${ErrorApril}*`)
);
console.error(ErrorApril);
}
},
};
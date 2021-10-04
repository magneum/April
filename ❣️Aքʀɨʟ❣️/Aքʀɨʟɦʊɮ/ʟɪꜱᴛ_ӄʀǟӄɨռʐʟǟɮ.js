const {
Aքʀɨʟȶʊɮɛ,
notneeded,
ᴀᴘʀɪʟᴍᴀx,
ᴀᴘʀɪʟᴠᴏʟ,
AքʀɨʟʄɨӼ,
Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const {
play
} = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const {
MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const youtube = new YouTubeAPI(Aքʀɨʟȶʊɮɛ);
module.exports = {
name: "list",
cooldown: 3,
async execute(message, args) {
try {
if (message.content.startsWith(AքʀɨʟʄɨӼ + "list") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
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
.setDescription(
`\n\n
**Ú§êr >** ${message.author}


**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`
)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}

if (message.content.startsWith(AքʀɨʟʄɨӼ + "list") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
const {
channel
} = message.member.voice;
const serverQueue = message.client.queue.get(message.guild.id);
if (!channel) {
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

*You need to* **join** *a voice channel first!*`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (!args.length) {
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

**usage:**
${AքʀɨʟʄɨӼ}playlist **YouTube Playlist URL** or **Valid Playlist Name**`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
const permissions = channel.permissionsFor(message.client.user);
if (!permissions.has(`CONNECT`)) {
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

Cannot connect to voice channel, missing permissions`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (!permissions.has(`SPEAK`)) {
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

I cannot speak in this voice channel, make sure I have the proper permissions!`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (serverQueue && channel !== message.guild.me.voice.channel) {
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

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
const search = args.join(` `);
const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
const url = args[0];
const urlValid = pattern.test(args[0]);
const queueConstruct = {
textChannel: message.channel,
channel,
connection: null,
songs: [],
loop: false,
volume: ᴀᴘʀɪʟᴠᴏʟ,
muted: false,
playing: true,
};
let playlist = null;
let videos = [];
if (urlValid) {
try {
playlist = await youtube.getPlaylist(url, {
part: `snippet`
});
videos = await playlist.getVideos(ᴀᴘʀɪʟᴍᴀx || 10, {
part: `snippet`,
});
} catch (error) {
console.error(error);
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
.setDescription(
`\n\n
**Ú§êr >** ${message.author}


Playlist not found`
)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
} else if (scdl.isValidUrl(args[0])) {
if (args[0].includes(`/sets/`)) {
message.channel.send(
"**Aքʀɨʟ❣️ʍʊֆɨƈ**\n⌛ Fetching the playlist..."
);
playlist = await scdl.getSetInfo(args[0], notneeded);
videos = playlist.tracks.map((track) => ({
title: track.title,
url: track.permalink_url,
duration: track.duration / 1000,
}));
}
} else {
try {
const results = await youtube.searchPlaylists(search, 1, {
part: `snippet`,
});
playlist = results[0];
videos = await playlist.getVideos(ᴀᴘʀɪʟᴍᴀx, {
part: `snippet`
});
} catch (error) {
console.error(error);
message.channel
.send(error.message)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
}
const newSongs = videos
.filter(
(video) =>
video.title != `Private video` && video.title != `Deleted video`
)
.map((video) => {
return (music = {
title: video.title,
url: video.url,
duration: video.durationSeconds,
});
});
serverQueue
?
serverQueue.songs.push(...newSongs) :
queueConstruct.songs.push(...newSongs);
let playlistEmbed = new MessageEmbed()
.setTitle(`${playlist.title}`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(
newSongs.map((music, index) => `${index + 1}. ${music.title}`)
)
.setURL(playlist.url)
.setColor("#ff0000")
.setTimestamp();
if (playlistEmbed.description.length >= 2048)
playlistEmbed.description =
playlistEmbed.description.substr(0, 2007) +
"**Aքʀɨʟ❣️ʍʊֆɨƈ**\nPlaylist larger than character limit...";
message.react("✅");
message.react("❣️");
message.channel
.send(
new MessageEmbed()
.setColor("#ff0000")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(
`\n\n
**Ú§êr >** ${message.author}

Added a playlist`
)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
playlistEmbed;
if (!serverQueue) {
message.client.queue.set(message.guild.id, queueConstruct);
try {
queueConstruct.connection = await channel.join();
await queueConstruct.connection.voice.setSelfDeaf(true);
play(queueConstruct.songs[0], message);
} catch (error) {
console.error(error);
message.client.queue.delete(message.guild.id);
await channel.leave();
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
.setDescription(
`\n\n
**Ú§êr >** ${message.author}

Could not join the channel: *${error}*`
)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
}
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
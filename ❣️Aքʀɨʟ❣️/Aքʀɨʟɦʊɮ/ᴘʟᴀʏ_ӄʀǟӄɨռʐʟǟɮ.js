const {
Aքʀɨʟȶʊɮɛ,
ᴀᴘʀɪʟᴠᴏʟ,
AքʀɨʟʄɨӼ,
Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(Aքʀɨʟȶʊɮɛ);
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ = /^.*(list=)([^#\&\?]*).*/gi;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ =
/^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
name: "play",
cooldown: 8,
async execute(message, args) {
try {
if (
message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
) {
message.react("❌");
message.react("🔥");

message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

This link seems to be a playlist link.
Please use **${AքʀɨʟʄɨӼ}list** command for any YouTube playlists..`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (
message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
) {
const { channel } = message.member.voice;
const serverQueue = message.client.queue.get(message.guild.id);
if (!channel) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (channel && args.length) {
message.react("✅");
message.channel
.send(
new MessageEmbed()
.setColor("#ff0040")
.setAuthor(`April❣️Music`)
.setDescription(
`**❣️🔍Searching \`${args.join(" ")}\`, and Adding in 3sec**`
)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
)
.catch(console.error);
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (serverQueue && channel !== message.guild.me.voice.channel) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

You must be in the same Voice Channel as **Aքʀɨʟ❣️Mʊֆɨƈ**.`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (!args.length) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

**usage:**
${AքʀɨʟʄɨӼ}play **YouTube URL** or **Video Name**`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
const permissions = channel.permissionsFor(message.client.user);
if (!permissions.has(`CONNECT`)) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

Cannot connect to voice channel, missing permissions`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (!permissions.has(`SPEAK`)) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

I cannot speak in this voice channel, make sure I have the proper permissions!`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
const url = args[0];
const search = args.join(` `);
const urlValid = ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]);
if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]) && ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
message.client.commands.get(`list`).execute(message, args);
return;
}
if (not_needed_scl.test(url)) {
try {
https.get(url, function (res) {
if (res.statusCode == `302`) {
message.client.commands
.get(`play`)
.execute(message, [res.headers.location]);
return;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} else {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter(
"𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
).setDescription(`👍**Ú§êr >** ${message.author}

Audio Not Found`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
});
} catch (error) {
console.error(error);
message.channel.send(error.message).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

Following url redirection...`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
let songInfo = null;
let music = null;
if (urlValid) {
try {
songInfo = await ytdl.getInfo(url);
music = {
title: songInfo.videoDetails.title,
url: songInfo.videoDetails.video_url,
duration: songInfo.videoDetails.lengthSeconds,
};
} catch (error) {
console.error(error);
return message.channel.send(error.message).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} else {
try {
const results = await youtube.searchVideos(search, 1, {
part: `snippet`,
});
if (!results.length) {
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

Audio Not Found`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
songInfo = await ytdl.getInfo(results[0].url);
music = {
title: songInfo.videoDetails.title,
url: songInfo.videoDetails.video_url,
duration: songInfo.videoDetails.lengthSeconds,
};
} catch (error) {
console.error(error);
message.channel.send(error.message).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (serverQueue) {
serverQueue.songs.push(music);
serverQueue.textChannel
.send(
new MessageEmbed()
.setTitle("✅ " + music.title)
.setColor("#ff0040")
.setURL(music.url)
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(
`\`\`\`:partying_face:Succesfully added to the Queue.\`\`\`
**Requested by: **
👍> ${message.author} Check Top Right Thumbnail.`
)
.addField(
"Position in queue",
`**\`${serverQueue.songs.length - 1}\`**`,
true
)
.addField("Song Duration", `**\`${music.duration}\`**`, true)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
queueConstruct.songs.push(music);
message.client.queue.set(message.guild.id, queueConstruct);
try {
try {
queueConstruct.connection = await channel.join();
message.author
.send(
new MessageEmbed()
.setColor("#6c0000")
.setAuthor(`April❣️Music`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

**👍❣️ Joined \`${channel.name}\`
and is 📄 bound to \`#${message.channel.name}\`**`)
)
.catch(console.error);
message.channel
.send(
new MessageEmbed()
.setColor("#6c0000")
.setAuthor(`April❣️Music`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

**👍❣️ Joined \`${channel.name}\`
and is 📄 bound to \`#${message.channel.name}\`**`)
)
.catch(console.error);
} catch (e) {
console.log(e.message);
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

Aքʀɨʟ❣️ʍʊֆɨƈ™ Could not join the channel
*${error}*`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} catch (ErrorApril) {
message.channel.send("@everyone");
message.client.channels.cache
.get("894958787792871475")
.send(
new MessageEmbed()
.setColor("#6c0000")
.setTitle(`⚠️Warning!`)
.setAuthor(`April❣️Music`)
.setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️").setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ErrorApril}*`)
)
.catch(console.error);
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
message.channel.send(
new MessageEmbed()
.setColor("#DB4434")
.setAuthor("Error🔺Caught")
.setAuthor(`April❣️Music`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
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

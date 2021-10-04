const {
MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const {
play
} = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const {
AքʀɨʟʄɨӼ,
Aքʀɨʟքʊʀɢɛʀ
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
name: "filter",
cooldown: 3,
async execute(message, args, client) {
try {
if (message.content.startsWith(AքʀɨʟʄɨӼ + "filter") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
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
const {
channel
} = message.member.voice;
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

**Nothing in Queue!**
*Add music in Queue first!*`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (queue.length !== 0) {
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

**usage:** \`${AքʀɨʟʄɨӼ}filter\`
▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`)
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
if (message.content.startsWith(AքʀɨʟʄɨӼ + "filter") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
if (!message.member.voice.channel) {
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

*Please join a* **Voice Channel** *first*`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (queue && channel !== message.guild.me.voice.channel) {
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
const filters = [
"bass=g=20,dynaudnorm=f=200",
"apulsator=hz=0.08",
"aresample=48000,asetrate=48000*1.25",
"surround",
"asubboost",
"remove",
];
let AprilEffectNum;
let AprilSelected;
switch (args[0]) {
case "bassboost":
AprilEffectNum = 0;
break;
case "8D":
AprilEffectNum = 1;
break;
case "nightcore":
AprilEffectNum = 2;
break;
case "surrounding":
AprilEffectNum = 3;
break;
case "subboost":
AprilEffectNum = 4;
break;
case "clear":
AprilEffectNum = 5;
break;
default:
AprilEffectNum = 404;
message.react("❌");
message.react("🔥");
message.channel
.send(
new MessageEmbed()
.setColor("#FF5F15")
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setFooter(`**Example:** ${AքʀɨʟʄɨӼ}filter bassboost`)
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(`**Ú§êr >** ${message.author}
**That was not a valid filter!**

▫️ 8D
▫️ subboost
▫️ bassboost
▫️ nightcore
▫️ surrounding
▫️ clear [Clean all applied filter(s)]`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
break;
}
AprilSelected = filters[AprilEffectNum];
if (AprilEffectNum === 404) {
return;
}
try {
const music = queue.songs[0];
message.react("✅");
message.react("❣️");
message.channel.send(
new MessageEmbed()
.setColor("#ff0000")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setAuthor(
"Applied Filter = " + args[0],
"https://cdn.discordapp.com/emojis/769935094285860894.gif"
)
);
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
play(music, message, client, AprilSelected);
message.channel
.send(
new MessageEmbed()
.setColor("#AE4A3B")
.setTitle("PLEASE RESTART MUSIC QUEUE !")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
.setDescription(`**Ú§êr >** ${message.author}

*Song Queue has been cleaned up.*
Restart **queue** and **filter** will be applied.`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: 20000,
});
});
return;
} catch (error) {
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

**Nothing in Queue!**
*Add music in Queue first!*`)
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
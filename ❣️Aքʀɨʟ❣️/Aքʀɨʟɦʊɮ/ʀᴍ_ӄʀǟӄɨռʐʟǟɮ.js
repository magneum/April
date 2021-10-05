const {
MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const {
AքʀɨʟʄɨӼ,
Aքʀɨʟքʊʀɢɛʀ,
canModifyQueue
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
name: "rm",
cooldown: 8,
execute(message, args) {
try {
if (message.content.startsWith(AքʀɨʟʄɨӼ + "rm") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
message.react("❌");
message.react("🔥");
message.channel
.send(new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`))
.catch(console.error)
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (message.content.startsWith(AքʀɨʟʄɨӼ + "rm") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
const queue = message.client.queue.get(message.guild.id);
if (!queue) {
message.react("❌");
message.react("🔥");
message.channel
.send(new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

There is nothing in queue.`))
.catch(console.error)
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (!canModifyQueue(message.member)) {
message.react("❌");
message.react("🔥");
message.channel
.send(new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`))
.catch(console.error)
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (!args.length) {
message.react("❌");
message.react("🔥");
message.channel
.send(new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}

⚓️**usage:**${AքʀɨʟʄɨӼ}rm <Queue Number>`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`
});
});
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
const arguments = args.join(``);
const songs = arguments.split(`,`).map((arg) => parseInt(arg));
let removed = [];
if (pattern.test(arguments)) {
queue.songs = queue.songs.filter((item, index) => {
if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
else return true;
});

message.react("✅");
queue.textChannel
.send(
new MessageEmbed()
.setColor("#660000")
.setTitle(`⚠️Warning!`)
.setAuthor(`April❣️Music`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter(
"🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️"
).setDescription(`👍**Ú§êr >** ${message.author}

⏹ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.`)
)
.catch(console.error)
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
console.log(`we got elsed!`);

message.react("✅");
queue.textChannel
.send(
new MessageEmbed()
.setColor("#660000")
.setTitle(`⚠️Warning!`)
.setAuthor(`April❣️Music`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter(
"🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️"
).setDescription(`👍**Ú§êr >** ${message.author}

⏹ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
)
.catch(console.error)
// .then((message) => {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// });
return;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} else {
console.log(`we got the last one`);
message.react("❌");
message.react("🔥");
message.channel
.send(new MessageEmbed()
.setColor("#e69159")
.setAuthor(`April❣️Music`)
.setTitle(`⚠️Warning!`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`👍**Ú§êr >** ${message.author}
**usage:**${AքʀɨʟʄɨӼ}rm <Queue Number>`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`
});
});
return;
}
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
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
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ErrorApril}*`)
)
.catch(console.error);
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`
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
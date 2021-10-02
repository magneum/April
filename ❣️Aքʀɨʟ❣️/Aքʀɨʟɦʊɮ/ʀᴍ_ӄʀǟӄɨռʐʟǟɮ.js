const { MessageEmbed } = require('../ӄʀǟӄɨռʐʟǟɮ/src');
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ, canModifyQueue } = require('../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ');
module.exports = {
name: 'rm',
cooldown: 3,
execute(message, args) {
try {
if (message.content.startsWith(AքʀɨʟʄɨӼ + 'rm') && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
message.react('❌');
message.react('🔥');
message.channel
.send(new MessageEmbed()
.setColor('#FF5F15')
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ')
.setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (message.content.startsWith(AքʀɨʟʄɨӼ + 'rm') && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ" || message.channel.name === "™ᴋʀᴀᴋɪɴᴢ🤖ᴛᴇꜱᴛ") {
const queue = message.client.queue.get(message.guild.id);
if (!queue) {
message.react('❌');
message.react('🔥');
message.channel
.send(new MessageEmbed()
.setColor('#FF5F15')
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ')
.setDescription(`**Ú§êr >** ${message.author}

There is nothing in queue.`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (!canModifyQueue(message.member)) {
message.react('❌');
message.react('🔥');
message.channel
.send(new MessageEmbed()
.setColor('#FF5F15')
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ')
.setDescription(`**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
}
if (!args.length) {
message.react('❌');
message.react('🔥');
message.channel
.send(new MessageEmbed()
.setColor('#FF5F15')
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ')
.setDescription(`**Ú§êr >** ${message.author}

⚓️**usage:**${AքʀɨʟʄɨӼ}rm <Queue Number>`))
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`
});
});
return;
}
const arguments = args.join(``);
const songs = arguments.split(`,`).map((arg) => parseInt(arg));
let removed = [];
if (pattern.test(arguments)) {
queue.songs = queue.songs.filter((item, index) => {
if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
else return true;
});
message.react('✅');
message.react('❣️');
queue.textChannel
.send(
new MessageEmbed()
.setColor('#660000')
.setAuthor(`😲 Warning! ⚠️`)
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter(
'🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ'
).setDescription(`**Ú§êr >** ${message.author}

⏺ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
} else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
console.log(`we got elsed!`);
message.react('✅');
message.react('❣️');
queue.textChannel
.send(
new MessageEmbed()
.setColor('#660000')
.setAuthor(`😲 Warning! ⚠️`)
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter(
'🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ'
).setDescription(`**Ú§êr >** ${message.author}

⏺ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
)
.catch(console.error)
.then((message) => {
message.delete({
timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
});
});
return;
} else {
console.log(`we got the last one`);
message.react('❌');
message.react('🔥');
message.channel
.send(new MessageEmbed()
.setColor('#FF5F15')
.setTitle("April❣️Music by🔱KrakinzLab™️")
.setAuthor(`😲 Warning! ⚠️`)
.setURL("https://github.com/Krakinz?tab=repositories")
.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ')
.setDescription(`**Ú§êr >** ${message.author}
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

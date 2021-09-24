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
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ, canModifyQueue } = require("../noirtem/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "remove",
    cooldown: 3,
    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name !== "noir🍀player") {
            const embedfactor = new MessageEmbed()
                .setColor(`#32CD32`)
                .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)


                .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

_Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands._`);
            message.channel
                .send(embedfactor)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    });
                });
            return;
        }
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name === "noir🍀player") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedrm1 = new MessageEmbed()
                    .setColor(`#32CD32`)
                    .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
                    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

There is no queue.`);
                message.channel
                    .send(embedrm1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
            if (!canModifyQueue(message.member)) {
                const embedrm2 = new MessageEmbed()
                    .setColor(`#32CD32`)
                    .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
                    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

You need to join a voice channel first!`);
                message.channel
                    .send(embedrm2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
            if (!args.length) {
                const embedrm3 = new MessageEmbed()
                    .setColor(`#32CD32`)
                    .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
                    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.channel
                    .send(embedrm3)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
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
                queue.textChannel
                    .send(`**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n❌ Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`);
            } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                console.log(`we got elsed!`);
                return queue.textChannel.send(`**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n❌ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`);
            } else {
                console.log(`we got the last one`);
                const embedrm4 = new MessageEmbed()
                    .setColor(`#32CD32`)
                    .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
                    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.channel
                    .send(embedrm4)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
        }
    }
};
const { ʙᴏᴛꜰɪx, AUTOCLEANER, canModifyQueue } = require("../noirtem/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "remove",


    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name !== "🦋noir🎧player🦋") {
            const embedfactor = new MessageEmbed()
                .setColor(`0x1f8b4c`)
                .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)


                .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
            message.channel
                .send(embedfactor)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${AUTOCLEANER}`
                    });
                });
            return;
        }
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name === "🦋noir🎧player🦋") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedrm1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** There is no queue.`);
                message.channel
                    .send(embedrm1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (!canModifyQueue(message.member)) {
                const embedrm2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** You need to join a voice channel first!`);
                message.channel
                    .send(embedrm2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (!args.length) {
                const embedrm3 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** ⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.channel
                    .send(embedrm3)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
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
                    .send(`**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  ❌ Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`);
            } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                console.log(`we got elsed!`);
                return queue.textChannel.send(`**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  ❌ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`);
            } else {
                console.log(`we got the last one`);
                const embedrm4 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** **usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.channel
                    .send(embedrm4)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
        }
    }
};
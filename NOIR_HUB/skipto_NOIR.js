const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "skipto",


    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") && message.channel.name !== "🦋noir🎧player🦋") {
            const embedfactor = new MessageEmbed()
                .setColor(`0x1f8b4c`)
                .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                
                
                .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
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
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "skipto") && message.channel.name === "🦋noir🎧player🦋") {
            if (!args.length || isNaN(args[0])) {
                const embedskpto1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
Noir > ⚓️**usage:**${ʙᴏᴛꜰɪx}{name} <Queue Number>`);
                message.channel
                    .send(embedskpto1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedskpto2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
Noir > There is nothing playing that I could skip for you.`);
                message.channel
                    .send(embedskpto2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (!canModifyQueue(message.member)) {
                const embedskpto3 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
Noir > You need to join a voice channel first!`);
                message.channel
                    .send(embedskpto3)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (args[0] > queue.songs.length) {
                const embedshp1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
Noir > There is nothing playing that I could skip for you.`);
                message.channel
                    .send(embedshp1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            queue.playing = true;
            if (queue.loop) {
                for (let i = 0; i < args[0] - 2; i++) {
                    queue.songs.push(queue.songs.shift());
                }
            } else {
                queue.songs = queue.songs.slice(args[0] - 2);
            }
            queue.connection.dispatcher.end();
            queue.textChannel.send(`${message.author}>\n\n**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n⚜️Noir > ❌ stopped the music!`)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${AUTOCLEANER}`
                    });
                });
        }
    }
};
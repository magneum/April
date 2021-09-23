const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ, canModifyQueue } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "resume",


    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "resume") && message.channel.name !== "🦋noir🎧player🦋") {
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
                        timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    });
                });
            return;
        }
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "resume") && message.channel.name === "🦋noir🎧player🦋") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedresume1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** is not playing anymusic yet.....`);
                message.channel
                    .send(embedresume1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
            if (!canModifyQueue(message.member)) {
                const embedresume2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** is not playing anymusic yet.....`);
                message.channel
                    .send(embedresume2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
            if (!queue.playing) {
                queue.playing = true;
                queue.connection.dispatcher.resume();
                queue.textChannel.send(`${message.author}\n\n**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  ▶ Resumed the music!`)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    })
                return;
            }
            const embedresume3 = new MessageEmbed()
                .setColor(`0x1f8b4c`)
                .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** The queue is not paused.`);
            message.channel
                .send(embedresume3)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    });
                });
            return;
        }
    }
};
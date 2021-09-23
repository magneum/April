const { canModifyQueue, ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../noirtem/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "shuffle",


    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") && message.channel.name !== "🦋noir🎧player🦋") {
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
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "shuffle") && message.channel.name === "🦋noir🎧player🦋") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedshuf1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** There is no queue.`);
                message.channel
                    .send(embedshuf1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (!canModifyQueue(message.member)) {
                const embedshuf2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** You need to join a voice channel first!`);
                message.channel
                    .send(embedshuf2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            let songs = queue.songs;
            for (let i = songs.length - 1; i > 1; i--) {
                let j = 1 + Math.floor(Math.random() * i);
                [songs[i], songs[j]] = [songs[j], songs[i]];
            }
            queue.songs = songs;
            message.client.queue.set(message.guild.id, queue);
            queue.textChannel.send(`${message.author}>\n\n**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  🔀 Shuffled the queue`)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${AUTOCLEANER}`
                    });
                });
        }
    }
};
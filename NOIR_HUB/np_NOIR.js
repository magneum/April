const { MessageEmbed } = require("discord.js");
const { splitBar } = require("string-progressbar");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");

module.exports = {
    name: "np",


    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "np") && message.channel.name !== "🦋noir🎧player🦋") {
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
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "np") && message.channel.name === "🦋noir🎧player🦋") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embednp1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
⚜️Noir > is not playing anymusic yet....`);
                message.channel
                    .send(embednp1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            const song = queue.songs[0];
            const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
            const left = song.duration - seek;
            let current = new MessageEmbed()
                .setTitle("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n⚜️Noir > Now playing")
                .setDescription(`${song.title}\n${song.url}`)
                .setColor(`#F8AA2A`)
                .setAuthor(message.client.user.username);
            if (song.duration > 0) {
                current.addField(`\u200b`, new Date(seek * 1000).toISOString().substr(11, 8) + `[` + splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] + `]` + (song.duration == 0 ? ` ◉ LIVE` : new Date(song.duration * 1000).toISOString().substr(11, 8)), false);
                current.setFooter(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n⚜️Noir > ⏱Time Remaining: ${new Date(left * 1000).toISOString().substr(11, 8)}`)
            };
            return message.channel
                .send(current);
        }
    }
};
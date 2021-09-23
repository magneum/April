const ytdl = require("ytdl-core-discord");
const { canModifyQueue, NOIRWAKE } = require("../noirtem/noir_env");



module.exports = {
    async play(song, message) {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            setTimeout(function () {
                if (queue.connection.dispatcher && message.guild.me.voice.channel) return;
                queue.channel.leave();
                queue.textChannel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  Leaving voice channel...");
            },
                NOIRWAKE);
            queue.textChannel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  ❌ Music queue ended.")
                .catch(console.error);
            message.client.queue.delete(message.guild.id)
            return;
        }
        let stream = null;
        let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
        try {
            if (song.url.includes("youtube.com")) {
                stream = await ytdl(song.url,
                    {
                        highWaterMark: 1 << 25
                    });
            } else if (song.url.includes("soundcloud.com")) {
                return;
            }
        } catch (error) {
            if (queue) {
                queue.songs.shift();
                module.exports.play(queue.songs[0], message);
            }
            console.error(error);
            const embedmusic1 = new MessageEmbed()
                .setColor(`0x1f8b4c`)
                .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =**  Error: ${error}`);
            message.channel
                .send(embedmusic1)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${AUTOCLEANER}`
                    });
                });
            return;
        };
        queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
        const dispatcher = queue.connection
            .play(stream, { type: streamType })
            .on("finish", () => {
                if (collector && !collector.ended) collector.stop();
                queue.connection.removeAllListeners("disconnect");
                if (queue.loop) {
                    let lastSong = queue.songs.shift();
                    queue.songs.push(lastSong);
                    module.exports.play(queue.songs[0], message);
                } else {
                    queue.songs.shift();
                    module.exports.play(queue.songs[0], message);
                }
            })
            .on("error", (err) => {
                console.error(err);
                queue.songs.shift();
                module.exports.play(queue.songs[0], message);
            });
        dispatcher.setVolumeLogarithmic(queue.volume / 100);
        try {
            var playingMessage = await queue.textChannel.send(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n🍧**Title**: ${song.title}\n⛓**Link**:  ${song.url}`);
            await playingMessage.react("👉🏻");
            await playingMessage.react("⏯");
            await playingMessage.react("🤫");
            await playingMessage.react("🔉");
            await playingMessage.react("🔊");
            await playingMessage.react("🔁");
            await playingMessage.react("❌");
        } catch (error) {
            console.error(error);
        }
        const filter = (reaction, user) => user.id !== message.client.user.id;
        var collector = playingMessage.createReactionCollector(filter, {
            time: song.duration > 0 ? song.duration * 1000 : 600000
        });
        collector.on("collect", (reaction, user) => {
            if (!queue) {
                return;
            }
            const member = message.guild.member(user);
            switch (reaction.emoji.name) {
                case "👉🏻":
                    queue.playing = true;
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        const embedmusic2 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic2)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.connection.dispatcher.end();
                    queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  ⏩ Skipped the song`)
                        .catch(console.error);
                    collector.stop();
                    break;
                case "⏯":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        const embedmusic3 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic3)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    if (queue.playing) {
                        queue.playing = !queue.playing;
                        queue.connection.dispatcher.pause(true);
                        queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🚦 Paused the music.`)
                            .catch(console.error);
                    } else {
                        queue.playing = !queue.playing;
                        queue.connection.dispatcher.resume();
                        queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  ▶ Resumed the music!`)
                            .catch(console.error);
                    }
                    break;
                case "🤫":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        const embedmusic4 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic4)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.muted = !queue.muted;
                    if (queue.muted) {
                        queue.connection.dispatcher.setVolumeLogarithmic(0);
                        queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🤫 Muted the music!`)
                            .catch(console.error);
                    } else {
                        queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                        queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔊 Unmuted the music!`)
                            .catch(console.error);
                    }
                    break;
                case "🔉":
                    reaction.users.remove(user).catch(console.error);
                    if (queue.volume == 0) {
                        return;
                    }
                    if (!canModifyQueue(member)) {
                        const embedmusic5 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic5)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.volume = Math.max(queue.volume - 10, 0);
                    queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                    queue.textChannel
                        .send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔉 Decreased the volume, the volume is now ${queue.volume}%`)
                        .catch(console.error);
                    break;
                case "🔊":
                    reaction.users.remove(user).catch(console.error);
                    if (queue.volume == 100) {
                        return;
                    }
                    if (!canModifyQueue(member)) {
                        const embedmusic6 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic6)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.volume = Math.min(queue.volume + 10, 100);
                    queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                    queue.textChannel.send(`${user}\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔊 Increased the volume, the volume is now ${queue.volume}%`)
                        .catch(console.error);
                    break;
                case "🔁":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        const embedmusic7 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic7)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.loop = !queue.loop;
                    queue.textChannel.send(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
                        .catch(console.error);
                    break;
                case "❌":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        const embedmusic8 = new MessageEmbed()
                            .setColor(`0x1f8b4c`)
                            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                            .setDescription(`\n\n
            **⚠️Warning⚠️** 
            **User:** ${message.author}
            
            **=========🦋𝗡𝗢𝗜𝗥🦋=========**
            **:microphone:Noir  =**  You need to join a voice channel first!`);
                        message.channel
                            .send(embedmusic8)
                            .catch(console.error)
                            .then((message) => {
                                message.delete({
                                    timeout: `${AUTOCLEANER}`
                                });
                            });
                        return;
                    }
                    queue.songs = [];
                    queue.textChannel.send(`${user} >\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n **: microphone: Noir =**  ❌ Stopped the music!`)
                        .catch(console.error);
                    try {
                        queue.connection.dispatcher.end();
                    } catch (error) {
                        console.error(error);
                        queue.connection.disconnect();
                    }
                    collector.stop();
                    break;
                default:
                    reaction.users.remove(user).catch(console.error);
                    break;
            }
        });
        collector.on("end", () => {
            playingMessage.reactions.removeAll().catch(console.error);
            if (playingMessage && !playingMessage.deleted) {
                playingMessage.delete({ timeout: 3000 }).catch(console.error);
            }
        });
    }
};
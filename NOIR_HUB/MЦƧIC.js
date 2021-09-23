const ytdl = require("ytdl-core-discord");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue, NOIRWAKE } = require("../NOIR_SYSTEM/noir_env");



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
            message.channel.send(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  Error: ${error}`)
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
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
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
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
                        return;
                    }
                    if (queue.playing) {
                        queue.playing = !queue.playing;
                        queue.connection.dispatcher.pause(true);
                        queue.textChannel.send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🚦 Paused the music.",
                            { author: user })
                            .catch(console.error);
                    } else {
                        queue.playing = !queue.playing;
                        queue.connection.dispatcher.resume();
                        queue.textChannel.send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  ▶ Resumed the music!",
                            { author: user })
                            .catch(console.error);
                    }
                    break;
                case "🤫":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!");
                        return;
                    }
                    queue.muted = !queue.muted;
                    if (queue.muted) {
                        queue.connection.dispatcher.setVolumeLogarithmic(0);
                        queue.textChannel.send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🤫 Muted the music!",
                            { author: user })
                            .catch(console.error);
                    } else {
                        queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                        queue.textChannel.send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔊 Unmuted the music!",
                            { author: user })
                            .catch(console.error);
                    }
                    break;
                case "🔉":
                    reaction.users.remove(user).catch(console.error);
                    if (queue.volume == 0) {
                        return;
                    }
                    if (!canModifyQueue(member)) {
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
                        return;
                    }
                    queue.volume = Math.max(queue.volume - 10, 0);
                    queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                    queue.textChannel
                        .send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔉 Decreased the volume, the volume is now {volume}%",
                            { author: user, volume: queue.volume })
                        .catch(console.error);
                    break;
                case "🔊":
                    reaction.users.remove(user).catch(console.error);
                    if (queue.volume == 100) {
                        return;
                    }
                    if (!canModifyQueue(member)) {
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
                        return;
                    }
                    queue.volume = Math.min(queue.volume + 10, 100);
                    queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
                    queue.textChannel.send("<@{author}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  🔊 Increased the volume, the volume is now {volume}%", { author: user, volume: queue.volume })
                        .catch(console.error);
                    break;
                case "🔁":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
                        return;
                    }
                    queue.loop = !queue.loop;
                    queue.textChannel.send(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  Loop is now ${queue.loop ? noir_loader.__("common.on") : noir_loader.__("common.off")}`)
                        .catch(console.error);
                    break;
                case "❌":
                    reaction.users.remove(user).catch(console.error);
                    if (!canModifyQueue(member)) {
                        message.channel.send("🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  You need to join a voice channel first!")
                        return;
                    }
                    queue.songs = [];
                    queue.textChannel.send(`${user}>\n\n🦋🎧𝗡𝗢𝗜𝗥🎧🦋\n\n**:microphone:Noir  =**  ❌ Stopped the music!`)
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
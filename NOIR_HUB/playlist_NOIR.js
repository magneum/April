const { play } = require("./MЦƧIC");
const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const { NOIRYT,
    notneeded,
    NOIRMAX,
    NOIRVOL } = require("../NOIR_SYSTEM/noir_env");
const youtube = new YouTubeAPI(NOIRYT);
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");



module.exports = {
    name: "list",
    cooldown: 5,


    async execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "list") && message.channel.name !== "🦋noir🎧player🦋") {
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
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "list") && message.channel.name === "🦋noir🎧player🦋") {
            const { channel } = message.member.voice;
            const serverQueue = message.client.queue.get(message.guild.id);
            if (!channel) {
                const embedlist1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** You need to join a voice channel first!`);
                message.channel
                    .send(embedlist1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }

            if (!args.length) {
                const embedlist2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** ⚓️**usage:**{ʙᴏᴛꜰɪx}playlist <YouTube Playlist URL | Playlist Name>`);
                message.channel
                    .send(embedlist2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            const permissions = channel.permissionsFor(message.client.user);
            if (!permissions.has(`CONNECT`)) {
                const embedlist3 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** Cannot connect to voice channel, missing permissions`);
                message.channel
                    .send(embedlist3)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (!permissions.has(`SPEAK`)) {
                const embedlist4 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** I cannot speak in this voice channel, make sure I have the proper permissions!`);
                message.channel
                    .send(embedlist4)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            if (serverQueue && channel !== message.guild.me.voice.channel) {
                const embedlist5 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** You must be in the same channel as ${message.client.user}`);
                message.channel
                    .send(embedlist5)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }

            const search = args.join(` `);
            const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
            const url = args[0];
            const urlValid = pattern.test(args[0]);
            const queueConstruct = {
                textChannel: message.channel,
                channel,
                connection: null,
                songs: [],
                loop: false,
                volume: NOIRVOL,
                muted: false,
                playing: true
            };
            let playlist = null;
            let videos = [];
            if (urlValid) {
                try {
                    playlist = await youtube.getPlaylist(url, { part: `snippet` });
                    videos = await playlist.getVideos(NOIRMAX || 10, { part: `snippet` });
                } catch (error) {
                    console.error(error);
                    const embedlist6 = new MessageEmbed()
                        .setColor(`0x1f8b4c`)
                        .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** Playlist not found`);
                    message.channel
                        .send(embedlist6)
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${AUTOCLEANER}`
                            });
                        });
                    return;
                }
            } else if (scdl.isValidUrl(args[0])) {
                if (args[0].includes(`/sets/`)) {
                    message.channel
                        .send("**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  ⌛ Fetching the playlist...");
                    playlist = await scdl.getSetInfo(args[0], notneeded);
                    videos = playlist.tracks.map((track) => ({
                        title: track.title,
                        url: track.permalink_url,
                        duration: track.duration / 1000
                    }));
                }
            } else {
                try {
                    const results = await youtube.searchPlaylists(search, 1, { part: `snippet` });
                    playlist = results[0];
                    videos = await playlist.getVideos(NOIRMAX, { part: `snippet` });
                } catch (error) {
                    console.error(error);
                    message.channel
                        .send(error.message)
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${AUTOCLEANER}`
                            });
                        })
                    return;
                }
            }
            const newSongs = videos.filter((video) => video.title != `Private video` && video.title != `Deleted video`)
                .map((video) => {
                    return (song = {
                        title: video.title,
                        url: video.url,
                        duration: video.durationSeconds
                    });
                });
            serverQueue ? serverQueue.songs.push(...newSongs) : queueConstruct.songs.push(...newSongs);
            let playlistEmbed = new MessageEmbed()
                .setTitle(`${playlist.title}`)
                .setDescription(newSongs.map((song, index) => `${index + 1}. ${song.title}`))
                .setURL(playlist.url)
                .setColor(`0x1f8b4c`)
                .setTimestamp();
            if (playlistEmbed.description.length >= 2048)
                playlistEmbed.description = playlistEmbed.description
                    .substr(0, 2007) +
                    "**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  Playlist larger than character limit...";
            message.channel
                .send(`$message.author>\n\n**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  Started a playlist`),
                playlistEmbed;
            if (!serverQueue) {
                message.client.queue.set(message.guild.id, queueConstruct);
                try {
                    queueConstruct.connection = await channel.join();
                    await queueConstruct.connection.voice.setSelfDeaf(true);
                    play(queueConstruct.songs[0], message);
                } catch (error) {
                    console.error(error);
                    message.client.queue.delete(message.guild.id);
                    await channel.leave();
                    const embedlist7 = new MessageEmbed()
                        .setColor(`0x1f8b4c`)
                        .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** Could not join the channel: ${error}`);
                    message.channel
                        .send(embedlist7)
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
    }
};

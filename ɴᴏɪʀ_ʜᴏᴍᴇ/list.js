`=================================================================—••÷[🕊NOIR🕊]÷••—==========================================================================
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                        —••÷[🕊NOIR🕊]÷••— 
                                                      Discord Music player Bot 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=================================================================—••÷[🕊NOIR🕊]÷••—==========================================================================`
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const { play } = require("../ɴᴏɪʀ_ʏᴏᴜᴛᴜʙᴇ/play");
const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const { NOIRTUNE, MAX_PLAYLIST_SIZE } = require("../ɴᴏɪʀ_ᴏꜱ/Sys")
const youtube = new YouTubeAPI(NOIRTUNE);
/**
 * 
 * 
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * Discord Music player Bot 
 * has been licensed under GNU General Public License
 * 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * 
 * 
 */
module.exports = {
  name: "list",
  cooldown: 5,
  description: pnoir.__("list.ɴᴏɪʀ_description"),

  async execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!args.length)
      return message.reply(pnoir.__mf("list.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix })).catch(console.error);
    if (!channel) return message.reply(pnoir.__("list.ɴᴏɪʀ_error_NotChannel")).catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) return message.reply(pnoir.__("list.ɴᴏɪʀ_missing_Permission_Connect"));
    if (!permissions.has("SPEAK")) return message.reply(pnoir.__("ɴᴏɪʀ_missing_Permission_Speak"));

    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(pnoir.__mf("play.ɴᴏɪʀ_error_Not_In_SameChannel", { user: message.client.user })).catch(console.error);

    const search = args.join(" ");
    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = pattern.test(args[0]);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 80,
      muted: false,
      playing: true
    };

    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await list.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      }
      catch (error) {
        console.error(error);
        return message.reply(pnoir.__("list.ɴᴏɪʀ_error_Playlist_Not_Found")).catch(console.error);
      }
    }
    else {
      try {
        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
        playlist = results[0];
        videos = await list.getVideos(MAX_PLAYLIST_SIZE, { part: "snippet" });
      }
      catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    const newSongs = videos.filter((video) => video.title != "Private video" && video.title != "Deleted video").map((video) => {
      return (song = {
        title: video.title,
        url: video.url,
        duration: video.durationSeconds
      });
    });

    serverQueue ? serverQueue.songs.push(...newSongs) : queueConstruct.songs.push(...newSongs);

    let playlistEmbed = new MessageEmbed()
      .setTitle(`${list.title}`)
      .setDescription(newSongs.map((song, index) => `${index + 1}. ${song.title}`))
      .setURL(list.url)
      .setColor("0x1f8b4c")
      .setTimestamp();

    if (playlistEmbed.description.length >= 2048)
      playlistEmbed.description = playlistEmbed.description.substr(0, 2007) + pnoir.__("list.ɴᴏɪʀ_playlist_Char_Limit");

    message.channel.send(pnoir.__mf("list.ɴᴏɪʀ_started_Playlist", { author: message.author }), playlistEmbed);

    if (!serverQueue) {
      message.client.queue.set(message.guild.id, queueConstruct);
      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      }
      catch (error) {
        console.error(error);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(pnoir.__mf("play.ɴᴏɪʀ_cant_Join_Channel", { error: error })).catch(console.error);
      }
    }
  }
};

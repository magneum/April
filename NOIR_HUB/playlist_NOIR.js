const { MessageEmbed } = require("discord.js");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { play } = require(".MЦƧIC");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const { NOIRYT, SOUNDCLOUD_CLIENT_ID, NOIRMAX, NOIRVOL } = require("../NOIR_SYSTEM/noir_env");
const youtube = new YouTubeAPI(NOIRYT);

module.exports = {
  name: "playlist",
  cooldown: 5,


  async execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }


    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!args.length)
      return message
        .reply(noir_loader.__mf("playlist.usageReply", { prefix: message.client.prefix }))
        .catch(console.error);
    if (!channel) return message.reply(noir_loader.__("playlist.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ")).catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) return message.reply(noir_loader.__("playlist.ПOIЯD_ᴍɪꜱꜱɪɴɢ_ᴘᴇʀᴍɪꜱꜱɪᴏɴ_ᴄᴏɴɴᴇᴄᴛ"));
    if (!permissions.has("SPEAK")) return message.reply(noir_loader.__("ПOIЯD_ᴍɪꜱꜱɪɴɢ_ᴘᴇʀᴍɪꜱꜱɪᴏɴ_ꜱᴘᴇᴀᴋ"));

    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message
        .reply(noir_loader.__mf("play.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ɪɴ_ꜱᴀᴍᴇ_ᴄʜᴀɴɴᴇʟ", { user: message.client.user }))
        .catch(console.error);

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
      volume: NOIRVOL,
      muted: false,
      playing: true
    };

    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await playlist.getVideos(NOIRMAX || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply(noir_loader.__("playlist.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ꜰᴏᴜɴᴅ_ᴘʟᴀʏʟɪꜱᴛ")).catch(console.error);
      }
    } else if (scdl.isValidUrl(args[0])) {
      if (args[0].includes("/sets/")) {
        message.channel.send(noir_loader.__("playlist.ПOIЯD_ꜰᴇᴛᴄʜɪɴɢ_ᴘʟᴀʏʟɪꜱᴛ"));
        playlist = await scdl.getSetInfo(args[0], SOUNDCLOUD_CLIENT_ID);
        videos = playlist.tracks.map((track) => ({
          title: track.title,
          url: track.permalink_url,
          duration: track.duration / 1000
        }));
      }
    } else {
      try {
        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
        playlist = results[0];
        videos = await playlist.getVideos(NOIRMAX, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    const newSongs = videos
      .filter((video) => video.title != "Private video" && video.title != "Deleted video")
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
      .setColor("#F8AA2A")
      .setTimestamp();

    if (playlistEmbed.description.length >= 2048)
      playlistEmbed.description =
        playlistEmbed.description.substr(0, 2007) + noir_loader.__("playlist.ПOIЯD_ᴘʟᴀʏʟɪꜱᴛ_ᴄʜᴀʀ_ʟɪᴍɪᴛ");

    message.channel.send(noir_loader.__mf("playlist.ПOIЯD_ꜱᴛᴀʀᴛᴇᴅ_ᴘʟᴀʏʟɪꜱᴛ", { author: message.author }), playlistEmbed);

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
        return message.channel.send(noir_loader.__mf("play.ПOIЯD_ᴄᴀɴᴛ_ᴊᴏɪɴ_ᴄʜᴀɴɴᴇʟ", { error: error })).catch(console.error);
      }
    }
  }
};

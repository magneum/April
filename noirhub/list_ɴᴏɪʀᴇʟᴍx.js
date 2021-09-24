// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
const {
  ɴᴏɪʀʏᴛ,
  notneeded,
  ɴᴏɪʀᴍᴀx,
  ɴᴏɪʀᴠᴏʟ,
  ʙᴏᴛꜰɪx,
  ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
} = require("../noirtem/noir_env");
const { play } = require("./noir🍀player");
const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const youtube = new YouTubeAPI(ɴᴏɪʀʏᴛ);
module.exports = {
  name: "list",
  cooldown: 3,
  async execute(message, args) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "list") &&
      message.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)

        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

_Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands._`);
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "list") &&
      message.channel.name === "noir🍀player"
    ) {
      const { channel } = message.member.voice;
      const serverQueue = message.client.queue.get(message.guild.id);
      if (!channel) {
        const embedlist1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

You need to join a voice channel first!`);
        message.channel
          .send(embedlist1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (!args.length) {
        const embedlist2 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

⚓️**usage:**{ʙᴏᴛꜰɪx}playlist <YouTube Playlist URL | Playlist Name>`);
        message.channel
          .send(embedlist2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const permissions = channel.permissionsFor(message.client.user);
      if (!permissions.has(`CONNECT`)) {
        const embedlist3 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

Cannot connect to voice channel, missing permissions`);
        message.channel
          .send(embedlist3)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!permissions.has(`SPEAK`)) {
        const embedlist4 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

I cannot speak in this voice channel, make sure I have the proper permissions!`);
        message.channel
          .send(embedlist4)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (serverQueue && channel !== message.guild.me.voice.channel) {
        const embedlist5 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

You must be in the same channel as ${message.client.user}`);
        message.channel
          .send(embedlist5)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
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
        volume: ɴᴏɪʀᴠᴏʟ,
        muted: false,
        playing: true,
      };
      let playlist = null;
      let videos = [];
      if (urlValid) {
        try {
          playlist = await youtube.getPlaylist(url, { part: `snippet` });
          videos = await playlist.getVideos(ɴᴏɪʀᴍᴀx || 10, { part: `snippet` });
        } catch (error) {
          console.error(error);
          const embedlist6 = new MessageEmbed()
            .setColor(`#32CD32`)
            .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
            .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
            .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

Playlist not found`);
          message.channel
            .send(embedlist6)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
      } else if (scdl.isValidUrl(args[0])) {
        if (args[0].includes(`/sets/`)) {
          message.channel.send(
            "**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n⌛ Fetching the playlist..."
          );
          playlist = await scdl.getSetInfo(args[0], notneeded);
          videos = playlist.tracks.map((track) => ({
            title: track.title,
            url: track.permalink_url,
            duration: track.duration / 1000,
          }));
        }
      } else {
        try {
          const results = await youtube.searchPlaylists(search, 1, {
            part: `snippet`,
          });
          playlist = results[0];
          videos = await playlist.getVideos(ɴᴏɪʀᴍᴀx, { part: `snippet` });
        } catch (error) {
          console.error(error);
          message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
      }
      const newSongs = videos
        .filter(
          (video) =>
            video.title != `Private video` && video.title != `Deleted video`
        )
        .map((video) => {
          return (song = {
            title: video.title,
            url: video.url,
            duration: video.durationSeconds,
          });
        });
      serverQueue
        ? serverQueue.songs.push(...newSongs)
        : queueConstruct.songs.push(...newSongs);
      let playlistEmbed = new MessageEmbed()
        .setTitle(`${playlist.title}`)
        .setDescription(
          newSongs.map((song, index) => `${index + 1}. ${song.title}`)
        )
        .setURL(playlist.url)
        .setColor(`#32CD32`)
        .setTimestamp();
      if (playlistEmbed.description.length >= 2048)
        playlistEmbed.description =
          playlistEmbed.description.substr(0, 2007) +
          "**=========🦋𝗡𝗢𝗜𝗥🦋=========**\nPlaylist larger than character limit...";
      const embedlist7 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**User:** ${message.author}

Started a playlist`);
      message.channel
        .send(embedlist7)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
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
          const embedlist8 = new MessageEmbed()
            .setColor(`#32CD32`)
            .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ`)
            .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
            .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

Could not join the channel: ${error}`);
          message.channel
            .send(embedlist8)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
      }
    }
  },
};

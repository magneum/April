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
  ɴᴏɪʀᴠᴏʟ,
  ʙᴏᴛꜰɪx,
  ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
} = require("../noirtem/noir_env");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./noir🍀player");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(ɴᴏɪʀʏᴛ);
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  cooldown: 3,
  async execute(noirmsg, args) {
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "play") &&
      noirmsg.channel.name !== "noir🍀player"
    ) {
      const embedfactor = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands._`);
      noirmsg.channel
        .send(embedfactor)
        .catch(console.error)
        .then((noirmsg) => {
          noirmsg.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
      const embedplay1 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This link seems to be a playlist link.
Please use **${ʙᴏᴛꜰɪx}list** command for any YouTube playlists..`);
      noirmsg.channel
        .send(embedplay1)
        .catch(console.error)
        .then((noirmsg) => {
          noirmsg.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    if (
      noirmsg.content.startsWith(ʙᴏᴛꜰɪx + "play") &&
      noirmsg.channel.name === "noir🍀player"
    ) {
      const { channel } = noirmsg.member.voice;
      const serverQueue = noirmsg.client.queue.get(noirmsg.guild.id);
      if (!channel) {
        const embedplay1 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You need to join a voice channel first!`);
        noirmsg.channel
          .send(embedplay1)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (serverQueue && channel !== noirmsg.guild.me.voice.channel) {
        const embedplay2 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You must be in the same channel as ${noirmsg.client.user}`);
        noirmsg.channel
          .send(embedplay2)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (!args.length) {
        const embedplay3 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Noir⚓️**usage:** ${ʙᴏᴛꜰɪx}play _YouTube URL or Video Name`);
        noirmsg.channel
          .send(embedplay3)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const permissions = channel.permissionsFor(noirmsg.client.user);
      if (!permissions.has(`CONNECT`)) {
        const embedplay3 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Cannot connect to voice channel, missing permissions`);
        noirmsg.channel
          .send(embedplay3)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      if (!permissions.has(`SPEAK`)) {
        const embedplay3 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

I cannot speak in this voice channel, make sure I have the proper permissions!`);
        noirmsg.channel
          .send(embedplay3)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const url = args[0];
      const search = args.join(` `);
      const urlValid = ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]);
      if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]) && ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
        noirmsg.client.commands.get(`list`).execute(noirmsg, args);
        return;
      } else if (scdl.isValidUrl(url) && url.includes(`/sets/`)) {
        return;
      }
      if (not_needed_scl.test(url)) {
        try {
          https.get(url, function (res) {
            if (res.statusCode == `302`) {
              noirmsg.client.commands
                .get(`play`)
                .execute(noirmsg, [res.headers.location]);
              return;
            } else {
              const embedplay4 = new MessageEmbed()
                .setColor(`#32CD32`)
                .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Audio Not Found`);
              noirmsg.channel
                .send(embedplay4)
                .catch(console.error)
                .then((noirmsg) => {
                  noirmsg.delete({
                    timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                  });
                });
              return;
            }
          });
        } catch (error) {
          console.error(error);
          noirmsg.channel
            .send(error.noirmsg)
            .catch(console.error)
            .then((noirmsg) => {
              noirmsg.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
        const embedplay5 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Following url redirection...`);
        noirmsg.channel
          .send(embedplay5)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      const queueConstruct = {
        textChannel: noirmsg.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: ɴᴏɪʀᴠᴏʟ,
        muted: false,
        playing: true,
      };
      let songInfo = null;
      let song = null;
      if (urlValid) {
        try {
          songInfo = await ytdl.getInfo(url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds,
          };
        } catch (error) {
          console.error(error);
          return noirmsg.channel
            .send(error.noirmsg)
            .catch(console.error)
            .then((noirmsg) => {
              noirmsg.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        }
      } else if (scRegex.test(url)) {
        try {
          const trackInfo = await scdl.getInfo(url, notneeded);
          song = {
            title: trackInfo.title,
            url: trackInfo.permalink_url,
            duration: Math.ceil(trackInfo.duration / 1000),
          };
        } catch (error) {
          console.error(error);
          return noirmsg.channel
            .send(error.noirmsg)
            .catch(console.error)
            .then((noirmsg) => {
              noirmsg.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        }
      } else {
        try {
          const results = await youtube.searchVideos(search, 1, {
            part: `snippet`,
          });
          if (!results.length) {
            const embedplay6 = new MessageEmbed()
              .setColor(`#32CD32`)
              .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)

              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Audio Not Found`);
            noirmsg.channel
              .send(embedplay6)
              .catch(console.error)
              .then((noirmsg) => {
                noirmsg.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          songInfo = await ytdl.getInfo(results[0].url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds,
          };
        } catch (error) {
          console.error(error);
          noirmsg.channel
            .send(error.noirmsg)
            .catch(console.error)
            .then((noirmsg) => {
              noirmsg.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
      }
      if (serverQueue) {
        serverQueue.songs.push(song);
        serverQueue.textChannel
          .send(
            `**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n${song.title}\n_has been added to the queue by_ ${noirmsg.author}\n\n`
          )
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      queueConstruct.songs.push(song);
      noirmsg.client.queue.set(noirmsg.guild.id, queueConstruct);
      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], noirmsg);
      } catch (error) {
        console.error(error);
        noirmsg.client.queue.delete(noirmsg.guild.id);
        await channel.leave();
        const embedplay7 = new MessageEmbed()
          .setColor(`#32CD32`)
          .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟ`)
          .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Could not join the channel: ${error}`);
        noirmsg.channel
          .send(embedplay7)
          .catch(console.error)
          .then((noirmsg) => {
            noirmsg.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
    }
  },
};

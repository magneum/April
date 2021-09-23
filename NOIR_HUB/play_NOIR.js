const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./MЦƧIC");
const YouTubeAPI = require("simple-youtube-api");
const { NOIRYT, notneeded, NOIRVOL } = require("../NOIR_SYSTEM/noir_env");
const youtube = new YouTubeAPI(NOIRYT);
const { ʙᴏᴛꜰɪx } = require("../NOIR_SYSTEM/noir_env");
const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "play",
  cooldown: 3,


  async execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "play") && message.channel.name !== "🦋noir🎧player🦋") {
      const embedfactor = new MessageEmbed()
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
**⚠️WARNING⚠️** 
**User:** ${message.author}
**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**

•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: 10000
          });
        });
      return;
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "play") && message.channel.name === "🦋noir🎧player🦋") {
      const { channel } = message.member.voice;
      const serverQueue = message.client.queue.get(message.guild.id);
      if (!channel) {
        message.channel
          .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** You need to join a voice channel first!")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          });
        return;
      }
      if (serverQueue && channel !== message.guild.me.voice.channel) {
        message.channel
          .send(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** You must be in the same channel as ${message.client.user}`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }

      if (!args.length) {
        message.channel
          .send(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir⚓️usage:** ${ʙᴏᴛꜰɪx}play _YouTube URL or Video Name_`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      const permissions = channel.permissionsFor(message.client.user);
      if (!permissions.has(`CONNECT`)) {
        message.channel
          .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Cannot connect to voice channel, missing permissions")
        return;
      }
      if (!permissions.has(`SPEAK`)) {
        message.channel
          .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** I cannot speak in this voice channel, make sure I have the proper permissions!")
        return;
      }
      const url = args[0];
      const search = args.join(` `);
      const urlValid = videoPattern.test(args[0]);
      if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
        message.client.commands.get(`playlist`).execute(message, args)
        return;
      } else if (scdl.isValidUrl(url) && url.includes(`/sets/`)) {
        return;
      }
      if (not_needed_scl.test(url)) {
        try {
          https.get(url, function (res) {
            if (res.statusCode == `302`) {
              message.client.commands.get(`play`).execute(message, [res.headers.location])
              return;
            } else {
              message.channel
                .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Audio Not Found")
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: 10000
                  });
                })
              return;
            }
          });
        } catch (error) {
          console.error(error);
          message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 10000
              });
            })
          return;
        }
        message.channel
          .send(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Following url redirection...`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
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
      let songInfo = null;
      let song = null;
      if (urlValid) {
        try {
          songInfo = await ytdl.getInfo(url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds
          };
        } catch (error) {
          console.error(error);
          return message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 10000
              });
            });
        }
      } else if (scRegex.test(url)) {
        try {
          const trackInfo = await scdl.getInfo(url, notneeded);
          song = {
            title: trackInfo.title,
            url: trackInfo.permalink_url,
            duration: Math.ceil(trackInfo.duration / 1000)
          };
        } catch (error) {
          console.error(error);
          return message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 10000
              });
            });
        }
      } else {
        try {
          const results = await youtube.searchVideos(search, 1, { part: `snippet` });
          if (!results.length) {
            message.channel
              .send("**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Audio Not Found")
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: 10000
                });
              });
            return;
          }
          songInfo = await ytdl.getInfo(results[0].url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds
          };
        } catch (error) {
          console.error(error);
          message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 10000
              });
            })
          return;
        }
      }
      if (serverQueue) {
        serverQueue.songs.push(song);
        serverQueue.textChannel.send(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** ${song.title}\n_has been added to the queue by_ ${message.author}\n\n`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
      queueConstruct.songs.push(song);
      message.client.queue.set(message.guild.id, queueConstruct);
      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(error);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        message.channel
          .send(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**\n\n⚜️**Noir** Could not join the channel: ${error}`)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 10000
            });
          })
        return;
      }
    }
  }
};
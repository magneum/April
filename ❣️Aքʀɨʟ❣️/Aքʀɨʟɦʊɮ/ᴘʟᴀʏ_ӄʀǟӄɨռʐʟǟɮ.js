const {
  Aքʀɨʟȶʊɮɛ,
  notneeded,
  ᴀᴘʀɪʟᴠᴏʟ,
  AքʀɨʟʄɨӼ,
  Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/April_env");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(Aքʀɨʟȶʊɮɛ);
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
module.exports = {
  name: "play",
  cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  async execute(message, args) {
    try {
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
        message.channel.name !== "april💖player"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}
=========♥️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️քʟǟʏɛʀ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `
**User:** ${message.author}
=========♥️=========

This link seems to be a playlist link.
Please use **${AքʀɨʟʄɨӼ}list** command for any YouTube playlists..`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "play") &&
        message.channel.name === "april💖player"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

*You need to* **join** *a voice channel first!*`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (channel && args.length) {
          message.react("✅");
          message.react("🍧");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

*Searching and Playing in less then* **3secs!**`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 8000,
              });
            });
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (!args.length) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

**usage:**
${AքʀɨʟʄɨӼ}play **YouTube URL** or **Video Name**`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

Cannot connect to voice channel, missing permissions`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (!permissions.has(`SPEAK`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

I cannot speak in this voice channel, make sure I have the proper permissions!`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        const url = args[0];
        const search = args.join(` `);
        const urlValid = ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]);
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]) && ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
          message.client.commands.get(`list`).execute(message, args);
          return;
        } else if (scdl.isValidUrl(url) && url.includes(`/sets/`)) {
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (not_needed_scl.test(url)) {
          try {
            https.get(url, function (res) {
              if (res.statusCode == `302`) {
                message.client.commands
                  .get(`play`)
                  .execute(message, [res.headers.location]);
                return;
              } else {
                message.react("❌");
                message.react("🔥");
                message.channel
                  .send(
                    new MessageEmbed()
                      .setColor("#E0D268")
                      .setTitle("⚠️Warning⚠️")
                      .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                      .setThumbnail(
                        `https://i.postimg.cc/5tgjvj1y/A.png`
                      )
                      .setFooter(
                        "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                      ).setDescription(`**User:** ${message.author}
=========♥️=========

Audio Not Found`)
                  )
                  .catch(console.error)
                  .then((message) => {
                    message.delete({
                      timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                    });
                  });
                return;
              }
            });
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
          } catch (error) {
            console.error(error);
            message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            return;
          }
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

Following url redirection...`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        const queueConstruct = {
          textChannel: message.channel,
          channel,
          connection: null,
          songs: [],
          loop: false,
          volume: ᴀᴘʀɪʟᴠᴏʟ,
          muted: false,
          playing: true,
        };
        let songInfo = null;
        let music = null;
        if (urlValid) {
          try {
            songInfo = await ytdl.getInfo(url);
            music = {
              title: songInfo.videoDetails.title,
              url: songInfo.videoDetails.video_url,
              duration: songInfo.videoDetails.lengthSeconds,
            };
          } catch (error) {
            console.error(error);
            return message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
          }
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
        } else if (scRegex.test(url)) {
          try {
            const trackInfo = await scdl.getInfo(url, notneeded);
            music = {
              title: trackInfo.title,
              url: trackInfo.permalink_url,
              duration: Math.ceil(trackInfo.duration / 1000),
            };
          } catch (error) {
            console.error(error);
            return message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
          }
          // =============================================================================================================================
          // GNU GENERAL PUBLIC LICENSE
          // Version 3, 29 June 2007
          // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
          // ============================================================================================================================
        } else {
          try {
            const results = await youtube.searchVideos(search, 1, {
              part: `snippet`,
            });

            if (!results.length) {
              message.react("❌");
              message.react("🔥");
              message.channel
                .send(
                  new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                    .setThumbnail(
                      `https://i.postimg.cc/5tgjvj1y/A.png`
                    )
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                      `
**User:** ${message.author}
=========♥️=========

Audio Not Found`
                    )
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            songInfo = await ytdl.getInfo(results[0].url);
            music = {
              title: songInfo.videoDetails.title,
              url: songInfo.videoDetails.video_url,
              duration: songInfo.videoDetails.lengthSeconds,
            };
          } catch (error) {
            console.error(error);
            message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
            return;
          }
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        if (serverQueue) {
          serverQueue.songs.push(music);
          serverQueue.textChannel
            .send(
              `**Aքʀɨʟ❣️քʟǟʏɛʀ**
${music.title}
_has been added to the queue by_
${message.author}`
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        // =============================================================================================================================
        // GNU GENERAL PUBLIC LICENSE
        // Version 3, 29 June 2007
        // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        // ============================================================================================================================
        queueConstruct.songs.push(music);
        message.client.queue.set(message.guild.id, queueConstruct);
        try {
          try {
            queueConstruct.connection = await channel.join();
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#660000")
                  .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                  .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(
                    `
**User:** ${message.author}
=========♥️=========

**👍 Joined \`${channel.name}\`
and is 📄 bound to \`#${message.channel.name}\`**`
                  )
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                });
              });
          } catch (e) {
            console.log(e.message);
          }
          await queueConstruct.connection.voice.setSelfDeaf(true);
          play(queueConstruct.songs[0], message);
        } catch (error) {
          console.error(error);
          message.client.queue.delete(message.guild.id);
          await channel.leave();
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(
                  `
**User:** ${message.author}
=========♥️=========

Could not join the channel: *${error}*`
                )
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // ============================================================================================================================
    } catch (ErrorApril) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setTitle("🔺ERROR CAUGHT🔻")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
          .setDescription(`
**April** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorApril}*`)
      );
      console.error(ErrorApril);
    }
  },
};

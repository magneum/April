try {
  const {
    ռօɨʀȶʊɮɛ,
    notneeded,
    ɴᴏɪʀᴍᴀx,
    ɴᴏɪʀᴠᴏʟ,
    ռօɨʀʄɨӼ,
    ռօɨʀքʊʀɢɛʀ,
  } = require("../noirtem/noir_env");
  const { play } = require("./💜Noir");
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  const YouTubeAPI = require("simple-youtube-api");
  const scdl = require("soundcloud-downloader").default;
  const youtube = new YouTubeAPI(ռօɨʀȶʊɮɛ);
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "list",
    cooldown: 3,
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    async execute(message, args) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "list") &&
        message.channel.name !== "💜noir"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `\n\n
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`💜Noir\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`
              )
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });
        return;
      }

      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "list") &&
        message.channel.name === "💜noir"
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
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          return;
        }

        if (!args.length) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

**usage:**
${ռօɨʀʄɨӼ}playlist **YouTube Playlist URL** or **Valid Playlist Name**`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          return;
        }

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

Cannot connect to voice channel, missing permissions`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          return;
        }

        if (!permissions.has(`SPEAK`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

I cannot speak in this voice channel, make sure I have the proper permissions!`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
          return;
        }
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#E0D268")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                .setDescription(`
**User:** ${message.author}
=========⚜️=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
            )
            .catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          //   });
          // });
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
            videos = await playlist.getVideos(ɴᴏɪʀᴍᴀx || 10, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            message.react("❌");
            message.react("🔥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#E0D268")
                  .setTitle("⚠️Warning⚠️")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(
                    `\n\n
**User:** ${message.author}
=========⚜️=========

Playlist not found`
                  )
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            return;
          }
        } else if (scdl.isValidUrl(args[0])) {
          if (args[0].includes(`/sets/`)) {
            message.channel.send("**💜Noir**\n⌛ Fetching the playlist...");
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
            message.channel.send(error.message).catch(console.error);
            // .then((message) => {
            // message.delete({
            // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            // });
            // });
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
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(
            newSongs.map((song, index) => `${index + 1}. ${song.title}`)
          )
          .setURL(playlist.url)
          .setColor("#6272a4")
          .setTimestamp();

        if (playlistEmbed.description.length >= 2048)
          playlistEmbed.description =
            playlistEmbed.description.substr(0, 2007) +
            "**💜Noir**\nPlaylist larger than character limit...";
        message.react("✅");
        message.react("🍧");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
              .setDescription(
                `\n\n
**User:** ${message.author}

Started a playlist`
              )
          )
          .catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        //   });
        // });

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
            message.react("❌");
            message.react("🔥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#E0D268")
                  .setTitle("⚠️Warning⚠️")
                  .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                  .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                  .setDescription(
                    `\n\n
**User:** ${message.author}
=========⚜️=========

Could not join the channel: *${error}*`
                  )
              )
              .catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            //   });
            // });
            return;
          }
        }
      }
    },
  };
} catch (ErrorNoir) {
  message.channel.send(
    new MessageEmbed()
      .setColor("#DB4434")
      .setTitle("🔺ERROR CAUGHT🔻")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
      .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
      .setDescription(`
**Noir** has encountered an error.

Please either report to 🔰**https://discord.gg/ucPpXWFK**  in discord channel
or
Report to 🔰**@Krakns** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`)
  );
  console.error(ErrorNoir);
}

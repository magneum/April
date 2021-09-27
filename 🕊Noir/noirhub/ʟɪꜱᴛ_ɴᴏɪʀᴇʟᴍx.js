try {
  const {
    ɴᴏɪʀʏᴛ,
    notneeded,
    ɴᴏɪʀᴍᴀx,
    ɴᴏɪʀᴠᴏʟ,
    ʙᴏᴛꜰɪx,
    ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
  } = require("../noirtem/noir_env");
  const { play } = require("./🤍Noir");
  const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
  const YouTubeAPI = require("simple-youtube-api");
  const scdl = require("soundcloud-downloader").default;
  const youtube = new YouTubeAPI(ɴᴏɪʀʏᴛ);
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 🤍Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  module.exports = {
    name: "list",
    cooldown: 3,
    // ==================================================================
    // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    async execute(message, args) {
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "list") &&
        message.channel.name !== "🤍noir"
      ) {
        message.react("❌");
        message.react("🔥");
        const embedfactor = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `\n\n
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🤍Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
          );

        message.channel.send(embedfactor).catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        //   });
        // });
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "list") &&
        message.channel.name === "🤍noir"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          const embedlist1 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedlist1).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (!args.length) {
          const embedlist2 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

**usage:**
${ʙᴏᴛꜰɪx}playlist **YouTube Playlist URL** or **Valid Playlist Name**`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedlist2).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          const embedlist3 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Cannot connect to voice channel, missing permissions`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedlist3).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (!permissions.has(`SPEAK`)) {
          const embedlist4 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

I cannot speak in this voice channel, make sure I have the proper permissions!`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedlist4).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          const embedlist5 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`);
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedlist5).catch(console.error);
          // .then((message) => {
          //   message.delete({
          //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          //   });
          // });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
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
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        let playlist = null;
        let videos = [];
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (urlValid) {
          try {
            playlist = await youtube.getPlaylist(url, { part: `snippet` });
            videos = await playlist.getVideos(ɴᴏɪʀᴍᴀx || 10, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            const embedlist6 = new MessageEmbed()
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
              .setDescription(
                `\n\n
**User:** ${message.author}
=========:radio_button:=========

Playlist not found`
              );
            message.react("❌");
            message.react("🔥");
            message.channel.send(embedlist6).catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            return;
          }
          // ==================================================================
          // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
        } else if (scdl.isValidUrl(args[0])) {
          if (args[0].includes(`/sets/`)) {
            message.channel.send("**🤍Noir**\n⌛ Fetching the playlist...");
            playlist = await scdl.getSetInfo(args[0], notneeded);
            videos = playlist.tracks.map((track) => ({
              title: track.title,
              url: track.permalink_url,
              duration: track.duration / 1000,
            }));
          }
          // ==================================================================
          // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
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
            // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            // });
            // });
            return;
          }
        }
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
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
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        serverQueue
          ? serverQueue.songs.push(...newSongs)
          : queueConstruct.songs.push(...newSongs);
        let playlistEmbed = new MessageEmbed()
          .setTitle(`${playlist.title}`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            newSongs.map((song, index) => `${index + 1}. ${song.title}`)
          )
          .setURL(playlist.url)
          .setColor("#6272a4")
          .setTimestamp();
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (playlistEmbed.description.length >= 2048)
          playlistEmbed.description =
            playlistEmbed.description.substr(0, 2007) +
            "**🤍Noir**\nPlaylist larger than character limit...";
        const embedlist7 = new MessageEmbed()
          .setColor("#6272a4")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `\n\n
**User:** ${message.author}

Started a playlist`
          );
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        message.react("✅");
        message.react("🍧");
        message.channel.send(embedlist7).catch(console.error);
        // .then((message) => {
        //   message.delete({
        //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
        //   });
        // });
        // ==================================================================
        // ================>  🎶Noir🤍PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
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
              .setColor("#E0D268")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
              .setDescription(
                `\n\n
**User:** ${message.author}
=========:radio_button:=========

Could not join the channel: *${error}*`
              );
            message.react("❌");
            message.react("🔥");
            message.channel.send(embedlist8).catch(console.error);
            // .then((message) => {
            //   message.delete({
            //     timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            //   });
            // });
            return;
          }
        }
      }
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
    .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
    .setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
  message.channel.send(ErrorInNoir);
  console.error(ErrorNoir);
}

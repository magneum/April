const {
  Aքʀɨʟȶʊɮɛ,
  ᴀᴘʀɪʟᴍᴀx,
  ᴀᴘʀɪʟᴠᴏʟ,
  AքʀɨʟʄɨӼ,
  Aքʀɨʟքʊʀɢɛʀ,
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { play } = require("./Aքʀɨʟքʟǟʏɛʀ_ӄʀǟӄɨռʐʟǟɮ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(Aքʀɨʟȶʊɮɛ);
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "list",
  cooldown: 4,
  async execute(message, args) {
    try {
      if (message.author.bot) {
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "list") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#bc8a59")
              .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(
                `❣️\`User\`${message.author} |⚠️Please use \`Channel: Aքʀɨʟ❣️ʍʊֆɨƈ\` for any **ᴀᴘʀɪʟ** commands.`
              )
          )
          .catch(console.error);
        // .then((message) => {
        // try {
        // message.delete({
        // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
        // });
        // } catch (err) {
        // console.log(err);
        // }
        // });
        return;
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "list") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error);
          // .then((message) => {
          // try {
          // message.delete({
          // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
          // });
          // } catch (err) {
          // console.log(err);
          // }
          // });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (!args.length) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
**usage:**
${AքʀɨʟʄɨӼ}playlist **YouTube Playlist URL** or **Valid Playlist Name**`)
            )
            .catch(console.error);
          // .then((message) => {
          // try {
          // message.delete({
          // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
          // });
          // } catch (err) {
          // console.log(err);
          // }
          // });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
Cannot connect to voice channel, missing permissions`)
            )
            .catch(console.error);
          // .then((message) => {
          // try {
          // message.delete({
          // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
          // });
          // } catch (err) {
          // console.log(err);
          // }
          // });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (!permissions.has(`SPEAK`)) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
I cannot speak in this voice channel, make sure I have the proper permissions!`)
            )
            .catch(console.error);
          // .then((message) => {
          // try {
          // message.delete({
          // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
          // });
          // } catch (err) {
          // console.log(err);
          // }
          // });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          serverQueue.delete(message.guild.id);
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}You must be in the same Voice Channel as **Aքʀɨʟ❣️Mʊֆɨƈ**.

**IF THE BOT WAS DISCONNECTED WITHOUT STOPPING THE MUSIC QUEUE THEN THIS ERROR IS THROWN!**\n
**PLEASE RE-ADD THE BOT IN THE SERVER...**
*THE ERROR WILL BE FIXED SOON ONCE MY DEV BECOMES FREE*`)
            )
            .catch(console.error);
          // .then((message) => {
          // try {
          // message.delete({
          // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
          // });
          // } catch (err) {
          // console.log(err);
          // }
          // });
          return;
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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
          volume: ᴀᴘʀɪʟᴠᴏʟ,
          muted: false,
          playing: true,
        };
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        let playlist = null;
        let videos = [];
        if (urlValid) {
          try {
            playlist = await youtube.getPlaylist(url, {
              part: `snippet`,
            });
            videos = await playlist.getVideos(ᴀᴘʀɪʟᴍᴀx || 10, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            message.react("❌");

            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#bc8a59")
                  .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                  .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                  .setDescription(`❣️\`User\`${message.author}
Playlist not found`)
              )
              .catch(console.error);
            // .then((message) => {
            // try {
            // message.delete({
            // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            // });
            // } catch (err) {
            // console.log(err);
            // }
            // });
            return;
          }
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
          `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
          // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        } else {
          try {
            const results = await youtube.searchPlaylists(search, 1, {
              part: `snippet`,
            });
            playlist = results[0];
            videos = await playlist.getVideos(ᴀᴘʀɪʟᴍᴀx, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            message.channel.send(error.message).catch(console.error);
            // .then((message) => {
            // try {
            // message.delete({
            // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            // });
            // } catch (err) {
            // console.log(err);
            // }
            // });
            return;
          }
        }
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        const newSongs = videos
          .filter(
            (video) =>
              video.title != `Private video` && video.title != `Deleted video`
          )
          .map((video) => {
            return (music = {
              title: video.title,
              url: video.url,
              duration: video.durationSeconds,
            });
          });
        serverQueue
          ? serverQueue.songs.push(...newSongs)
          : queueConstruct.songs.push(...newSongs);
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        let playlistEmbed = new MessageEmbed()
          .setTitle(`${playlist.title}`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setDescription(
            newSongs.map((music, index) => `${index + 1}. ${music.title}`)
          )
          .setURL(playlist.url)
          .setColor("#ff0011")
          .setTimestamp();
        if (playlistEmbed.description.length >= 2048)
          playlistEmbed.description =
            playlistEmbed.description.substr(0, 2007) +
            "**Aքʀɨʟ❣️ʍʊֆɨƈ**\nPlaylist larger than character limit...";

        message.react("✅");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#ff0011")
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(`❣️\`User\`${message.author}
Added a playlist`)
          )
          .catch(console.error);
        // .then((message) => {
        // try {
        // message.delete({
        // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
        // });
        // } catch (err) {
        // console.log(err);
        // }
        // });
        playlistEmbed;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
        `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
        // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
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

            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#bc8a59")
                  .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                  .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                  .setURL("https://github.com/Krakinz?tab=repositories")
                  // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                  .setDescription(`❣️\`User\`${message.author}
Aքʀɨʟ❣️ʍʊֆɨƈ™ Could not join the channel
*${error}*`)
              )
              .catch(console.error);
            // .then((message) => {
            // try {
            // message.delete({
            // timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            // });
            // } catch (err) {
            // console.log(err);
            // }
            // });
            return;
          }
        }
      }
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
    } catch (ErrorApril) {
      message.client.channels.cache
        .get("894958787792871475")
        .send(
          new MessageEmbed()
            .setColor("#FFC300")
            .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
            .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
            .setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
            // .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️").setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ErrorApril}*`)
        )
        .catch(console.error);
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
      // ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
      message.channel.send(
        new MessageEmbed()
          .setColor("#ef4567")
          .setAuthor("Error🔺Caught")
          .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
          .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns

**Error🔻Caught**
*${ErrorApril}*`)
      );
      console.error(ErrorApril);
    }
  },
};

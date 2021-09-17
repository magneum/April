`=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                        —••÷[🦋NOIR🦋]÷••— 
                                                      Discord Music player Bot 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================`
const NoirYt = require("ytdl-core");
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const { play } = require("../ɴᴏɪʀ_ʏᴏᴜᴛᴜʙᴇ/play");
const YouTubeAPI = require("simple-youtube-api");
const { NOIRTUNE } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys")
const youtube = new YouTubeAPI(NOIRTUNE);



module.exports = {
  name: "play",
  cooldown: 3,
  // description: pnoir.__("play.ɴᴏɪʀ_description"),



  async execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!channel)
      return message.reply(pnoir.__("play.ɴᴏɪʀ_error_NotChannel")).catch(console.error);
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(pnoir.__mf("play.ɴᴏɪʀ_error_Not_In_SameChannel", { user: message.client.user })).catch(console.error);
    if (!args.length)
      return message.reply(pnoir.__mf("play.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix })).catch(console.error);


    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply(pnoir.__("play.ɴᴏɪʀ_missing_Permission_Connect"));
    if (!permissions.has("SPEAK"))
      return message.reply(pnoir.__("play.ɴᴏɪʀ_missing_Permission_Speak"));



    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = videoPattern.test(args[0]);



    // Start the playlist if playlist url was provided
    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.client.commands.get("playlist").execute(message, args);
    }


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


    
    let songInfo = null;
    let song = null;



    if (urlValid) {
      try {
        songInfo = await NoirYt.getInfo(url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    } else {
      try {
        const results = await youtube.searchVideos(search, 1, { part: "snippet" });

        if (!results.length) {
          message.reply(pnoir.__("play.ɴᴏɪʀ_song_Not_Found")).catch(console.error);
          return;
        }

        songInfo = await NoirYt.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      return serverQueue.textChannel.send(pnoir.__mf("play.ɴᴏɪʀ_queue_Added", { title: song.title, author: message.author })).catch(console.error);
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
      return message.channel.send(pnoir.__mf("play.ɴᴏɪʀ_cant_Join_Channel", { error: error })).catch(console.error);
    }
  }
};

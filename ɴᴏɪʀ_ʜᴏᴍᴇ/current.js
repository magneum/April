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
const { MessageEmbed } = require("discord.js");
const { splitBar } = require("string-progressbar");
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
  name: "current",
  description: pnoir.__("current.ɴᴏɪʀ_description"),

  execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply(pnoir.__("current.ɴᴏɪʀ_error_Not_Queue")).catch(console.error);

    const song = queue.songs[0];
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;

    let nowPlaying = new MessageEmbed()
      .setTitle(pnoir.__("current.ɴᴏɪʀ_embed_Title"))
      .setDescription(`${song.title}\n${song.url}`)
      .setColor("0x1f8b4c")
      .setAuthor(message.client.user.username);

    if (song.duration > 0) {
      nowPlaying.addField(
        "\u200b",
        new Date(seek * 1000).toISOString().substr(11, 8) +
        "[" + splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
        "]" + (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
        false
      );
      nowPlaying.setFooter(pnoir.__mf("current.ɴᴏɪʀ_time_Remaining", { time: new Date(left * 1000).toISOString().substr(11, 8) }));
    }
    return message.channel.send(nowPlaying);
  }
};

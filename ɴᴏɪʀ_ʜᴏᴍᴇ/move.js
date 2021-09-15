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
const move = require("array-move");
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const { canModifyQueue } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys");
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
  name: "move",
  description: pnoir.__("move.ɴᴏɪʀ_description"),

  execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(pnoir.__("move.ɴᴏɪʀ_error_Not_Queue")).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(pnoir.__mf("move.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix }));
    if (isNaN(args[0]) || args[0] <= 1)
      return message.reply(pnoir.__mf("move.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix }));

    let song = queue.songs[args[0] - 1];

    queue.songs = move(queue.songs, args[0] - 1, args[1] == 1 ? 1 : args[1] - 1);
    queue.textChannel.send(
      pnoir.__mf("move.ɴᴏɪʀ_player_result", {
        author: message.author,
        title: song.title,
        index: args[1] == 1 ? 1 : args[1]
      })
    );
  }
};

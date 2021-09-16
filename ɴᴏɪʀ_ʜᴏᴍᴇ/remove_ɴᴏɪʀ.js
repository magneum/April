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
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { canModifyQueue } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys");
/**
 * 
 * 
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * 
 * 
 */
module.exports = {
  name: "remove",
  // description: pnoir.__("remove.ɴᴏɪʀ_description"),
/**
 * 
 * 
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * 
 * 
 */
  execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    const queue = message.client.queue.get(message.guild.id);

    if (!queue)
      return message.channel.send(pnoir.__("remove.ɴᴏɪʀ_error_Not_Queue")).catch(console.error);
    if (!canModifyQueue(message.member))
      return pnoir.__("common.ɴᴏɪʀ_error_NotChannel");
    if (!args.length)
      return message.reply(pnoir.__mf("remove.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix }));

    const arguments = args.join("");
    const songs = arguments.split(",").map((arg) => parseInt(arg));
    let removed = [];

    if (pattern.test(arguments)) {
      queue.songs = queue.songs.filter((item, index) => {
        if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
        else return true;
      });

      queue.textChannel.send(
        pnoir.__mf("remove.ɴᴏɪʀ_player_result", {
          title: removed.map((song) => song.title).join("\n"),
          author: message.author.id
        })
      );
    } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
      console.log("we got elsed!");
      return queue.textChannel.send(
        pnoir.__mf("remove.ɴᴏɪʀ_player_result", {
          title: queue.songs.splice(args[0] - 1, 1)[0].title,
          author: message.author.id
        })
      );
    } else {
      console.log("we got the last one");
      return message.reply(pnoir.__mf("remove.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix }));
    }
  }
};

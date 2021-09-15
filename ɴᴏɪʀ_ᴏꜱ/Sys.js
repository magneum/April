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
exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;
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
  if (channelID !== botChannel) {
    return;
  } return true;
};
let config;
try { config = require("../config.json"); }
catch
(error) { config = null; }

require('dotenv').config()
exports.NDISCORD = process.env.NDISCORD;
exports.PREFIX = process.env.PREFIX;
exports.NOIRTUNE = process.env.NOIRTUNE
exports.MAX_PLAYLIST_SIZE = process.env.MAX_PLAYLIST_SIZE;
exports.STAY_TIME = process.env.STAY_TIME;
exports.LOCALE = process.env.LOCALE;
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
const { MessageEmbed } = require("discord.js");
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
const NoirHelpQ = `
**• /help**
Display all commands and descriptions.
**• /loop**  
== Toggle music loop.
**• /lyrics**
== Get lyrics for the currently playing song.
**• /nowplaying**
== Show now playing song.
**• /pause**
== Pause the currently playing music.
**• /ping**
== Check server ping of client.
**• /play**
== Plays audio from YouTube.
**• /list**
== Play a playlist from YouTube.
**• /queue**
== Show the music queue and now playing.
**• /remove**
== Remove song from the queue.
**• /resume**
== Resume currently playing music.
**• /shuffle**
== Shuffle music queue.
**• /next**
== Skip the currently playing song.
**• /skip**
== Skip to the selected queue number.
**• /stop**
== Stops the music.
**• /vol**
== Change volume of currently playing music.`;
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
  name: "help",

  execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    let helpEmbed = new MessageEmbed()
      .setTitle("—••÷[🕊NOIR Discord Music Player🕊]÷•—")
      .setDescription(NoirHelpQ)
      .setAuthor("Author•— HypeVoidSoul")
      .setFooter("—••÷=======[ 🕊NOIR🕊 ]=======÷•—")
      .setThumbnail("https://telegra.ph/file/3766d80c69f488d850173.jpg")
      .setImage("https://telegra.ph/file/3766d80c69f488d850173.jpg")
      .setColor("0x1f8b4c");
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

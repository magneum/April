// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  execute(message) {
    let HELPEMBED = new MessageEmbed()
      .setDescription(
        `📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪n
**• !help**
*Display all commands and descriptions.*
**• !loop**
*Toggle music loop.*
**• !lyrics**
*Get lyrics for the currently playing song.*
**• !np**
*Show now playing song.*
**• !pause**
*Pause the currently playing music.*
**• !ping**
*Check server ping of client.*
**• !play**
*Plays audio from YouTube.*
**• !list**
*Play a playlist from YouTube.*
**• !queue**
*Show the music queue and now playing.*
**• !remove**
*Remove song from the queue.*
**• !resume**
*Resume currently playing music.*
**• !shuffle**
*Shuffle music queue.*
**• !next**
*Skip the currently playing song.*
**• !skip**
*Skip to the selected queue number.*
**• !stop**
*Stops the music.*
**• !vol**
*Change volume of currently playing music.*
**• !pfp**
*Get the profile picture of yours of any user's.*`
      )
      .setColor(`#32CD32`)
      .setAuthor(`ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ ʙʏ ʜʏᴘᴇᴠᴏɪᴅꜱᴏᴜʟl`)
      .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
      .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`);
    message.channel.send(HELPEMBED).catch(console.error);
    return;
  },
};

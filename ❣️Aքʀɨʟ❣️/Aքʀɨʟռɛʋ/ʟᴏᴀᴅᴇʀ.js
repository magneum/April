// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// ❣️April
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
// =============================================================================================================================
require("dotenv").config();
exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;
  if (channelID !== botChannel) {
    return;
  } else {
    return true;
  }
};
exports.Aքʀɨʟȶʊɮɛ = process.env.AprilYT;
exports.AքʀɨʟʄɨӼ = process.env.AprilFIX;
exports.Aքʀɨʟӄɛռ = process.env.AprilES;
exports.ᴀᴘʀɪʟᴍᴀx = process.env.AprilMAX;
exports.ᴀᴘʀɪʟᴠᴏʟ = process.env.AprilVOL;
exports.ᴀᴘʀɪʟᴡᴀᴋᴇ = process.env.AprilWAKE;
exports.Aքʀɨʟքʊʀɢɛʀ = process.env.AprilCLEANER;

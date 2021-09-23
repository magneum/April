require('dotenv').config()
exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;
  if (channelID !== botChannel) { return; }
  else { return true; }
};
exports.ɴᴏɪʀʏᴛ = process.env.NOIRYT;
exports.ʙᴏᴛꜰɪx = process.env.BOTFIX;
exports.ɴᴏɪʀᴇꜱ = process.env.NOIRES;
exports.ɴᴏɪʀᴍᴀx = process.env.NOIRMAX;
exports.ɴᴏɪʀᴠᴏʟ = process.env.NOIRVOL;
exports.ɴᴏɪʀᴡᴀᴋᴇ = process.env.NOIRWAKE;
exports.ɴᴏɪʀᴄʟᴇᴀɴᴇʀ = process.env.NOIRCLEANER;
require('dotenv').config()
exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;
  if (channelID !== botChannel) { return; }
  else { return true; }
};
exports.LOCALE = process.env.LOCALE;
exports.NOIRYT = process.env.NOIRYT;
exports.ʙᴏᴛꜰɪx = process.env.BOTFIX;
exports.NOIRMAX = process.env.NOIRMAX;
exports.NOIRVOL = process.env.NOIRVOL;
exports.NOIRDISK = process.env.NOIRDISK;
exports.NOIRWAKE = process.env.NOIRWAKE;
exports.AUTOCLEANER = process.env.AUTOCLEANER;
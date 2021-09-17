exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;



  if (channelID !== botChannel) {
    return;
  } return true;
};

require('dotenv').config()
exports.LOCALE = process.env.LOCALE;
exports.NOIRYT = process.env.NOIRYT;
exports.PREFIX = process.env.PREFIX;
exports.NOIRMAX = process.env.NOIRMAX;
exports.NOIRVOL = process.env.NOIRVOL;
exports.NOIRDISK = process.env.NOIRDISK;
exports.NOIRWAKE = process.env.NOIRWAKE;
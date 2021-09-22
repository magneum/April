const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "resume",


  execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(noir_loader.__("resume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel
        .send(noir_loader.__mf("resume.ПOIЯD_ʀᴇꜱᴜʟᴛ_ɴᴏᴛ_ᴘʟᴀʏɪɴɢ", { author: message.author }))

        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);
    }

    return message.reply(noir_loader.__("resume.ПOIЯD_ᴇʀʀᴏʀ_ᴘʟᴀʏɪɴɢ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

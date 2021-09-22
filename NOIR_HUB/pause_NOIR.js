const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "pause",


  execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(noir_loader.__("pause.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ")).catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel
        .send(noir_loader.__mf("pause.ПOIЯD_ʀᴇꜱᴜʟᴛ", { author: message.author }))
        .catch(console.error);
    }
  }
};

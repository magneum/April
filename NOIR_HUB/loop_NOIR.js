const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "loop",



  execute(message, args) {
    if (message.author) {
      message.delete();
    } 


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(noir_loader.__("loop.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(noir_loader.__mf("loop.ПOIЯD_ʀᴇꜱᴜʟᴛ", { loop: queue.loop ? noir_loader.__("common.on") : noir_loader.__("common.off") }))

      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

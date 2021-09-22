const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "vol",


  execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 


    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ"))
        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);

    if (!args[0])
      return message.reply(noir_loader.__mf("volume.ПOIЯD_ᴄᴜʀʀᴇɴᴛ_ᴠᴏʟᴜᴍᴇ", { volume: queue.volume }))
        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);
    if (isNaN(args[0])) return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ɴᴜᴍʙᴇʀ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0)
      return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴠᴀʟɪᴅ"))
        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    return queue.textChannel.send(noir_loader.__mf("volume.ПOIЯD_ʀᴇꜱᴜʟᴛ", { arg: args[0] }))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "vol",


  execute(message, args) {
    try { message.delete(); }
    catch (error) {
      console.error(error);
      pass;
    }


    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ")).catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ")).catch(console.error);

    if (!args[0])
      return message.reply(noir_loader.__mf("volume.ПOIЯD_ᴄᴜʀʀᴇɴᴛ_ᴠᴏʟᴜᴍᴇ", { volume: queue.volume })).catch(console.error);
    if (isNaN(args[0])) return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ɴᴜᴍʙᴇʀ")).catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0)
      return message.reply(noir_loader.__("volume.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴠᴀʟɪᴅ")).catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    return queue.textChannel.send(noir_loader.__mf("volume.ПOIЯD_ʀᴇꜱᴜʟᴛ", { arg: args[0] })).catch(console.error);
  }
};

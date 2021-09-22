const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "skipto",


  execute(message, args) {
    if (message.author) {
      message.delete();
    } 


    if (!args.length || isNaN(args[0]))
      return message
        .reply(noir_loader.__mf("skipto.ПOIЯD_ᴜꜱᴀɢᴇ_ʀᴇᴘʟʏ", { prefix: message.client.prefix, name: module.exports.name }))
        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(noir_loader.__("skipto.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
    if (args[0] > queue.songs.length)
      return message
        .reply(noir_loader.__mf("skipto.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴠᴀʟɪᴅ", { length: queue.songs.length }))

        .then(message => {
          message.delete({ timeout: 6000 });
        })
        .catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }

    queue.connection.dispatcher.end();
    queue.textChannel
      .send(noir_loader.__mf("skipto.ПOIЯD_ʀᴇꜱᴜʟᴛ", { author: message.author, arg: args[0] - 1 }))

      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

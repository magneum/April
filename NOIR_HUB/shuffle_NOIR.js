const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "shuffle",


  execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(noir_loader.__("shuffle.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");

    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    queue.textChannel.send(noir_loader.__mf("shuffle.ПOIЯD_ʀᴇꜱᴜʟᴛ", { author: message.author }))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

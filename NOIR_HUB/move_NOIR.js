const move = require("array-move");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "move",


  execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(noir_loader.__("move.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ")).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(noir_loader.__mf("move.ПOIЯD_ᴜꜱᴀɢᴇꜱ_ʀᴇᴘʟʏ", { prefix: message.client.prefix }));
    if (isNaN(args[0]) || args[0] <= 1)
      return message.reply(noir_loader.__mf("move.ПOIЯD_ᴜꜱᴀɢᴇꜱ_ʀᴇᴘʟʏ", { prefix: message.client.prefix }));

    let song = queue.songs[args[0] - 1];

    queue.songs = move(queue.songs, args[0] - 1, args[1] == 1 ? 1 : args[1] - 1);
    queue.textChannel.send(
      noir_loader.__mf("move.ПOIЯD_ʀᴇꜱᴜʟᴛ", {
        author: message.author,
        title: song.title,
        index: args[1] == 1 ? 1 : args[1]
      })
    );
  }
};

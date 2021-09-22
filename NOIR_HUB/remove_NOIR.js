const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;

module.exports = {
  name: "remove",


  execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 

    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.channel.send(noir_loader.__("remove.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");
    if (!args.length) return message.reply(noir_loader.__mf("remove.ПOIЯD_ᴜꜱᴀɢᴇ_ʀᴇᴘʟʏ", { prefix: message.client.prefix }));

    const arguments = args.join("");
    const songs = arguments.split(",").map((arg) => parseInt(arg));
    let removed = [];

    if (pattern.test(arguments)) {
      queue.songs = queue.songs.filter((item, index) => {
        if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
        else return true;
      });

      queue.textChannel.send(
        noir_loader.__mf("remove.ПOIЯD_ʀᴇꜱᴜʟᴛ", {
          title: removed.map((song) => song.title).join("\n"),
          author: message.author.id
        })
      );
    } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
      console.log("we got elsed!");
      return queue.textChannel.send(
        noir_loader.__mf("remove.ПOIЯD_ʀᴇꜱᴜʟᴛ", {
          title: queue.songs.splice(args[0] - 1, 1)[0].title,
          author: message.author.id
        })
      );
    } else {
      console.log("we got the last one");
      return message.reply(noir_loader.__mf("remove.ПOIЯD_ᴜꜱᴀɢᴇ_ʀᴇᴘʟʏ", { prefix: message.client.prefix }));
    }
  }
};

const { MessageEmbed } = require("discord.js");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { splitBar } = require("string-progressbar");


module.exports = {
  name: "current",



  execute(message, args) {
    try { message.delete(); }
    catch (error) {
      console.error(error);
      pass;
    }


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(noir_loader.__("current.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ")).catch(console.error);

    const song = queue.songs[0];
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;

    let current = new MessageEmbed()
      .setTitle(noir_loader.__("current.ПOIЯD_ᴇᴍʙᴇᴅ_ᴛɪᴛʟᴇ"))
      .setDescription(`${song.title}\n${song.url}`)
      .setColor("#F8AA2A")
      .setAuthor(message.client.user.username);

    if (song.duration > 0) {
      current.addField(
        "\u200b",
        new Date(seek * 1000).toISOString().substr(11, 8) +
        "[" +
        splitBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
        "]" +
        (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
        false
      );
      current.setFooter(
        noir_loader.__mf("current.ПOIЯD_ᴛɪᴍᴇ_ʀᴇᴍᴀɪɴɪɴɢ", { time: new Date(left * 1000).toISOString().substr(11, 8) })
      );
    }

    return message.channel.send(current);
  }
};

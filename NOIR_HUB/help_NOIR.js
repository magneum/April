const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "help",

  execute(message) {
    let HELPEMBED = new MessageEmbed()
      .setDescription(`📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪n
• !help
== Display all commands and descriptions.
• !loop  
== Toggle music loop.
• !lyrics
== Get lyrics for the currently playing song.
• !np
== Show now playing song.
• !pause
== Pause the currently playing music.
• !ping
== Check server ping of client.
• !play
== Plays audio from YouTube.
• !list
== Play a playlist from YouTube.
• !queue
== Show the music queue and now playing.
• !remove
== Remove song from the queue.
• !resume
== Resume currently playing music.
• !shuffle
== Shuffle music queue.
• !next
== Skip the currently playing song.
• !skip
== Skip to the selected queue number.
• !stop
== Stops the music.
• !vol
== Change volume of currently playing music.`)
      .setColor(`0x1f8b4c`)
      .setAuthor(`Author•— HypeVoidSoul`)
      .setFooter(`**🦋------------------  𝗡𝗢𝗜𝗥  ------------------🦋**`)
      .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
      .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`);
    message.channel
      .send(HELPEMBED)
      .catch(console.error)
      .then((message) => {
        message.delete({
          timeout: 10000
        });
      })
    return;
  }
};
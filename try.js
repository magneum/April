try {
} catch (ErrorNoir) {
  message.channel.send(
    new MessageEmbed()
      .setColor("#DB4434")
      .setTitle("🔺ERROR CAUGHT🔻")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
      .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
      .setDescription(`
**Noir** has encountered an error.

Please either report to 🔰**https://discord.gg/ucPpXWFK**  in discord channel
or
Report to 🔰**@Krakns** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`)
  );
  console.error(ErrorNoir);
}

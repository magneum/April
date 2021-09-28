try {
  const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
  const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "queue",
    cooldown: 3,
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
    async execute(message) {
      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "queue") &&
        message.channel.name !== "💜noir"
      ) {
        message.react("❌");
        message.react("🔥");
        const embedfactor = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**Category:** \`🔱Krakinz\`
**Channel:** \`💜Noir\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`
          );
        message.channel.send(embedfactor).catch(console.error);
        // .then((message) => {
        // message.delete({
        // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
        // });
        // });
        return;
      }

      if (
        message.content.startsWith(ռօɨʀʄɨӼ + "queue") &&
        message.channel.name === "💜noir"
      ) {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
          const embedqueue1 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

Missing permission to manage messages or add reactions`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedqueue1).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          // });
          // });
          return;
        }

        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          const embedqueue2 = new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

⏺ Nothing playing in this server`
            );
          message.react("❌");
          message.react("🔥");
          message.channel.send(embedqueue2).catch(console.error);
          // .then((message) => {
          // message.delete({
          // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
          // });
          // });
          return;
        }

        let currentPage = 0;
        message.react("✅");
        message.react("🍧");
        const embeds = generateQueueEmbed(message, queue.songs);
        const queueEmbed = await message.channel.send(
          `**🏷Page Num:** - ${currentPage + 1}/${embeds.length}`,
          embeds[currentPage]
        );

        try {
          await queueEmbed.react(`⬅️`);
          await queueEmbed.react(`⏺`);
          await queueEmbed.react(`➡️`);
        } catch (error) {
          console.error(error);
          message.channel.send(error.message).catch(console.error);
        }

        const filter = (reaction, user) =>
          [`⬅️`, `⏺`, `➡️`].includes(reaction.emoji.name) &&
          message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
          time: 60000,
        });

        collector.on(`collect`, async (reaction, user) => {
          try {
            if (reaction.emoji.name === `➡️`) {
              if (currentPage < embeds.length - 1) {
                currentPage++;
                queueEmbed.edit("**🏷Page Num:** - ", {
                  page: currentPage + 1,
                  length: embeds.length,
                }),
                  embeds[currentPage];
              }
            } else if (reaction.emoji.name === `⬅️`) {
              if (currentPage !== 0) {
                --currentPage;
                queueEmbed.edit("**🏷Page Num:** - ", {
                  page: currentPage + 1,
                  length: embeds.length,
                }),
                  embeds[currentPage];
              }
            } else {
              collector.stop();
              reaction.message.reactions.removeAll();
            }
            await reaction.users.remove(message.author.id);
          } catch (error) {
            console.error(error);
            return message.channel.send(error.message).catch(console.error);
          }
        });
      }
    },
  };

  function generateQueueEmbed(message, queue) {
    let embeds = [];
    let k = 10;
    for (let i = 0; i < queue.length; i += 10) {
      const current = queue.slice(i, k);
      let j = i;
      k += 10;
      const info = current
        .map((track) => `${++j} - [${track.title}](${track.url})`)
        .join(`\n`);
      const embed = new MessageEmbed()
        .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        .setColor("#6272a4")
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
        .setDescription(
          `**💜Noir**\n\n⚜️**Current Song** -_[${queue[0].title}]_\n\n${info}`
        );
      embeds.push(embed);
    }
    return embeds;
  }
} catch (ErrorNoir) {
  message.channel.send(
    new MessageEmbed()
      .setColor("#DB4434")
      .setTitle("🔺ERROR CAUGHT🔻")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
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
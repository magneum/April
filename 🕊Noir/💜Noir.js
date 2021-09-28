CH = `~~~~~~~~~~~~~~~~~~~~~~~>  💜Noir by HypeVoidSoul <~~~~~~~~~~~~~~~~~~~~~~~`;
console.clear();
const os = require("os");
require("dotenv").config();
const { join } = require("path");
const express = require("express");
const { readdirSync } = require("fs");
const { Client, Collection } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
const ռօɨʀքʟǟʏɛʀ = new Client({ disableEveryone: false });
const { ռօɨʀӄɛռ, ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("./noirtem/noir_env.js");
const ռօɨʀֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 3000;
try {
  ռօɨʀֆɛʀʋɛʀ.listen(PORT);
  ռօɨʀքʟǟʏɛʀ.login(ռօɨʀӄɛռ);
  ռօɨʀքʟǟʏɛʀ.prefix = ռօɨʀʄɨӼ;
  ռօɨʀքʟǟʏɛʀ.queue = new Map();
  ռօɨʀքʟǟʏɛʀ.commands = new Collection();
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  const NoirEngineOil = new Collection();
  const { MessageEmbed } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const commandFiles = readdirSync(join(__dirname, "ռօɨʀɦʊɮ")).filter((file) =>
    file.endsWith("_ɴᴏɪʀᴇʟᴍx.js")
  );
  for (const file of commandFiles) {
    const command = require(join(__dirname, "ռօɨʀɦʊɮ", `${file}`));
    ռօɨʀքʟǟʏɛʀ.commands.set(command.name, command);
  }
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  ռօɨʀքʟǟʏɛʀ.on("ready", () => {
    ռօɨʀքʟǟʏɛʀ.user.setActivity(`💜 ${ռօɨʀʄɨӼ}noir | ${ռօɨʀʄɨӼ}play`, {
      type: "WATCHING",
    });
    console.log(`
${CH}
|••••💜    Bot-Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|••••💜    Bot-Os: ${os.platform().toUpperCase()}
|••••💜    Bot-Port: ${PORT}
~~~~~~~~~~~~~~~~~~~~~~~>  💜Noir by HypeVoidSoul <~~~~~~~~~~~~~~~~~~~~~~~
${LIC}
${CH}`);
  });
  ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
  ռօɨʀքʟǟʏɛʀ.on("error", console.error);
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  ռօɨʀքʟǟʏɛʀ.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    guild.channels
      .create("🔱Krakinz", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("💜noir", {
            type: "text",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              {
                id: guild.id,
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                ],
              },
            ],
          })
          .catch(console.error);
        guild.channels
          .create("🎤noir", {
            type: "voice",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              { id: guild.id, allow: ["VIEW_CHANNEL"] },
            ],
          })
          .catch(console.error);
      });
    channel.send("@everyone");
    channel
      .send(
        new MessageEmbed()
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(
            `
𝗗𝗲𝗮𝗿: @everyone
=========:radio_button:=========

ᴀ channel ɴᴀᴍᴇ **💜Noir** inside **🔱Krakinz** has been successfully created.
Please use the channel for any **ɴᴏɪʀ💜ᴘʟᴀʏᴇʀ** commands..`
          )
      )
      .catch(console.error);
    channel
      .send(
        new MessageEmbed()
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(`❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **💜Noir** for any **ɴᴏɪʀ_ᴘʟᴀʏᴇʀ** commands.

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
*Please use*
${ռօɨʀʄɨӼ}noir 
${ռօɨʀʄɨӼ}play 
${ռօɨʀʄɨӼ}help 
*to know more.*

:star:**ɴᴏᴛᴇ to** @everyone:
ᴀ channel ɴᴀᴍᴇ **💜Noir** inside **🔱Krakinz** has been successfully created.
Please use only that channel for any **ɴᴏɪʀ_ᴘʟᴀʏᴇʀ** commands..`)
      )
      .catch(console.error);
    return;
  });
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  ռօɨʀքʟǟʏɛʀ.on("message", async (message) => {
    if (message.author.bot) {
      return;
    }
    if (!message.guild) {
      const checkdm = new MessageEmbed()
        .setColor("#E0D268")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
        .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

• You are currently in a **DMChannel** and so you have been **restricted** using any **Noir 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**

• Add me in your channel and then all commands will be automatically accepted.`);
      message.reply(checkdm);
      message.react("❌");
      message.react("🔥");
      return;
    }
    //     if (message.content.startsWith(ռօɨʀʄɨӼ + `calib`)) {
    //       if (guild.me.hasPermission(`MANAGE_CHANNELS`)) {
    //         const embedcheck1 = new MessageEmbed()
    //           .setColor("#6272a4")
    //           .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
    //           .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    //           .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    //           .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
    //           .setDescription(
    //             `
    // 𝗗𝗲𝗮𝗿: @everyone
    // =========:radio_button:=========

    // ᴀ channel ɴᴀᴍᴇ **💜Noir** inside **🔱Krakinz** has been successfully created.
    // Please use the channel for any **ɴᴏɪʀ💜ᴘʟᴀʏᴇʀ** commands..`
    //           );
    //         message.channel.send(embedcheck1).catch(console.error);
    //         guild.channels.create("💜noir", {
    //           type: "GUILD_TEXT",
    //           permissionOverwrites: [
    //             {
    //               id: guild.roles.everyone,
    //               allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
    //               deny: [
    //                 "MANAGE_ROLES",
    //                 "MANAGE_NICKNAMES",
    //                 "MANAGE_CHANNELS",
    //                 "KICK_MEMBERS",
    //                 "BAN_MEMBERS",
    //               ],
    //             },
    //           ],
    //         });
    //         console.log(`•💜noir ©️• has been successfully created.`);
    //       } else {
    //         const embedcheck2 = new MessageEmbed()
    //           .setColor("#6272a4")
    //           .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
    //           .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    //           .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    //           .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
    //           .setDescription(
    //             `
    // 𝗗𝗲𝗮𝗿 **ADMIN**
    // =========:radio_button:=========

    // •|  _ᴀ channel ɴᴀᴍᴇ 💜Noir could not be created._
    // •|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
    // =𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
    // =𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
    // =𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
    // =𝘌𝘮𝘣𝘦𝘥𝘴`
    //           );
    //         message.channel.send(embedcheck2).catch(console.error);
    //         console.log(`•💜noir ©️• could not be created.`);
    //         return;
    //       }
    //     }
    const prefixRegex = new RegExp(
      `^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ռօɨʀʄɨӼ)})\\s*`
    );

    if (!prefixRegex.test(message.content)) {
      return;
    }
    const [matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
      ռօɨʀքʟǟʏɛʀ.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) {
      return;
    }
    if (!NoirEngineOil.has(command.name)) {
      NoirEngineOil.set(command.name, new Collection());
    }
    const now = Date.now();
    const timestamps = NoirEngineOil.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        const embedNoir1 = new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
          .setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
          command.name
        }' command.      `);
        message.react("❌");
        message.react("🔥");
        message.channel.send(embedNoir1).catch(console.error);
        return;
      }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      const embedNoir2 = new MessageEmbed()
        .setColor("#E0D268")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

There was an error executing that command.`
        );
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(embedNoir2)
        .catch(console.error)
        .then((message) => {
          message.delete({ timeout: `${ռօɨʀքʊʀɢɛʀ}` });
          return;
        });
    }
  });

  LIC = `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
Noir💜PLAYER = Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
    .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
    .setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
  message.channel.send(ErrorInNoir);
  console.error(ErrorNoir);
}

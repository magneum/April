CH = `~~~~~~~~~~~~~~~~~~~~~~~>  Noir🎶PLΛYΣЯ by HypeVoidSoul <~~~~~~~~~~~~~~~~~~~~~~~`;
console.clear();
const os = require("os");
require("dotenv").config();
const { join } = require("path");
const express = require("express");
const { readdirSync } = require("fs");
const { Client, Collection } = require("./ᴋʟᴀᴡᴠᴏɪᴅ/src");
const { ɴᴏɪʀᴇꜱ, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("./noirtem/noir_env.js");
const ռօɨʀքʟǟʏɛʀ = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0,
});
const ռօɨʀֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 3000;
// ==================================================================
// ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
// ==================================================================
ռօɨʀֆɛʀʋɛʀ.listen(PORT);
ռօɨʀքʟǟʏɛʀ.login(ɴᴏɪʀᴇꜱ);
ռօɨʀքʟǟʏɛʀ.prefix = ʙᴏᴛꜰɪx;
ռօɨʀքʟǟʏɛʀ.queue = new Map();
ռօɨʀքʟǟʏɛʀ.commands = new Collection();
// ==================================================================
// ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
// ==================================================================
const NoirEngineOil = new Collection();
const { MessageEmbed } = require("./ᴋʟᴀᴡᴠᴏɪᴅ/src");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "noirhub")).filter((file) =>
  file.endsWith("_ɴᴏɪʀᴇʟᴍx.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "noirhub", `${file}`));
  ռօɨʀքʟǟʏɛʀ.commands.set(command.name, command);
}
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🤍Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("ready", () => {
  ռօɨʀքʟǟʏɛʀ.user.setActivity(`🤍 ${ʙᴏᴛꜰɪx}noir/play/help`, {
    type: "WATCHING",
  });
  console.log(`
${CH}
|••••🍀    Bot-Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|••••🍀    Bot-Os: ${os.platform().toUpperCase()}
|••••🍀    Bot-Port: ${PORT}
~~~~~~~~~~~~~~~~~~~~~~~>  Noir🎶PLΛYΣЯ by HypeVoidSoul <~~~~~~~~~~~~~~~~~~~~~~~
${LIC}
${CH}`);
});
// ==================================================================
// ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
// ==================================================================
ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
ռօɨʀքʟǟʏɛʀ.on("error", console.error);
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🤍Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on(`guildCreate`, (guild) => {
  const channel = guild.channels.cache.find(
    (channel) =>
      channel.type === `text` &&
      channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
  );
  const embedThanks = new MessageEmbed()
    .setColor("#4b73c1")
    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
    .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
    .setDescription(`❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **🤍Noir** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands.

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
Please user ${ʙᴏᴛꜰɪx}noir/play/help🦋 to know more.

:star:**ɴᴏᴛᴇ to ᴏᴡɴᴇʀ ᴀɴᴅ ᴍᴏᴅᴇʀꜱ**
🎃**VERY VERY IMPORTANT**
Please use **!calib** once to calibrate before first use!`);
  channel.send(embedThanks).catch(console.error);
  return;
});
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🤍Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("message", async (message) => {
  if (message.author.bot) {
    return;
  }
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  if (!message.guild) {
    const checkdm = new MessageEmbed()
      .setColor("#d698bc")
      .setTitle("⚠️Warning⚠️")
      .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
      .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
      .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋").setDescription(`
**User:** ${message.author}
=========:radio_button:=========

• You are currently in a **DMChannel** and so you have been **restricted** using any **Noir 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**

• Add me in your channel and then all commands will be automatically accepted.`);
    message.reply(checkdm);
    message.react("❌");
    message.react("🔥");
    return;
  }
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 🤍Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  if (message.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
    if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new MessageEmbed()
        .setColor("#4b73c1")
        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
        .setDescription(
          `
𝗗𝗲𝗮𝗿 **ADMIN** 
=========:radio_button:=========

ᴀ channel ɴᴀᴍᴇ 🤍Noir has been successfully created.
Please use the channel for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands..`
        );
      message.channel.send(embedcheck1).catch(console.error);
      message.guild.channels.create("🤍noir", {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone,
          },
        ],
      });
      console.log(`•🤍noir ©️• has been successfully created.`);
    } else {
      const embedcheck2 = new MessageEmbed()
        .setColor("#4b73c1")
        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
        .setDescription(
          `
𝗗𝗲𝗮𝗿 **ADMIN** 
=========:radio_button:=========

•|  _ᴀ channel ɴᴀᴍᴇ 🤍Noir could not be created._
•|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
=𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
=𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
=𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
=𝘌𝘮𝘣𝘦𝘥𝘴`
        );
      message.channel.send(embedcheck2).catch(console.error);
      console.log(`•🤍noir ©️• could not be created.`);
      return;
    }
  }
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  const prefixRegex = new RegExp(
    `^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ʙᴏᴛꜰɪx)})\\s*`
  );
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  if (!prefixRegex.test(message.content)) {
    return;
  }
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  const [matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
    ռօɨʀքʟǟʏɛʀ.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  if (!command) {
    return;
  }
  if (!NoirEngineOil.has(command.name)) {
    NoirEngineOil.set(command.name, new Collection());
  }
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  const now = Date.now();
  const timestamps = NoirEngineOil.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      const embedNoir1 = new MessageEmbed()
        .setColor("#d698bc")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
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
  // ==================================================================
  // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    const embedNoir2 = new MessageEmbed()
      .setColor("#d698bc")
      .setTitle("⚠️Warning⚠️")
      .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
      .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
      .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
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
        message.delete({ timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}` });
        return;
      });
  }
});
// ==================================================================
// ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
// ==================================================================
LIC = `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
Noir🍀PLAYER = Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀`;
// ==================================================================
// ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
// ==================================================================

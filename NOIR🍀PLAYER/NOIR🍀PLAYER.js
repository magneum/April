// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
console.clear();
const os = require("os");
require("dotenv").config();
const { join } = require("path");
const express = require("express");
const { readdirSync } = require("fs");
const { Client, Collection } = require("discord.js");
const { ɴᴏɪʀᴇꜱ, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("./noirtem/noir_env.js");
const ռօɨʀքʟǟʏɛʀ = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0,
});
const PORT = process.env.PORT || 3000;
ռօɨʀքʟǟʏɛʀ.commands = new Collection();
ռօɨʀքʟǟʏɛʀ.prefix = ʙᴏᴛꜰɪx;
ռօɨʀքʟǟʏɛʀ.queue = new Map();
const ռօɨʀֆɛʀʋɛʀ = express();
const cooldowns = new Collection();
const { MessageEmbed } = require("discord.js");
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
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("ready", () => {
  ռօɨʀքʟǟʏɛʀ.user.setActivity(`${ʙᴏᴛꜰɪx}noir/play/help🦋`, {
    type: "WATCHING",
  });
  console.log(`
🦋=======ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ=======🦋
|🦋•Bot_Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|🦋•Bot_Os: ${os.platform().toUpperCase()}
🦋=======ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ=======🦋`);
});
ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
ռօɨʀքʟǟʏɛʀ.on("error", console.error);
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
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
    .setColor(`#32CD32`)
    .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
    .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
    .setDescription(`\n\n
❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands.


:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
Please user ${ʙᴏᴛꜰɪx}noir/play/help🦋 to know more_

---------------------|🔺|---------------------
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
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("message", async (noirmsg) => {
  if (noirmsg.author.bot) return;
  if (!noirmsg.guild) return;
  // try {
  //   noirmsg.delete();
  // } catch (e) {
  //   console.log(e.noirmsg);
  //   noirmsg.channel.send(e.noirmsg);
  // }
  if (noirmsg.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
    if (noirmsg.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ᴀ channel ɴᴀᴍᴇ noir🍀player has been successfully created.
Please use the channel for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands..`);
      noirmsg.channel.send(embedcheck1).catch(console.error);
      noirmsg.guild.channels.create("noir🍀player", {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: noirmsg.guild.roles.everyone,
          },
        ],
      });
      console.log(`•🦋noir🍀player🦋 ©️• has been successfully created.`);
    } else {
      const embedcheck2 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

•|  _ᴀ channel ɴᴀᴍᴇ noir🍀player could not be created._
•|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
=𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
=𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
=𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
=𝘌𝘮𝘣𝘦𝘥𝘴`);
      noirmsg.channel.send(embedcheck2).catch(console.error);
      console.log(`•🦋noir🍀player🦋 ©️• could not be created.`);
      return;
    }
  }
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // noir🍀player
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  const prefixRegex = new RegExp(
    `^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ʙᴏᴛꜰɪx)})\\s*`
  );
  if (!prefixRegex.test(noirmsg.content)) {
    return;
  }
  const [, matchedPrefix] = noirmsg.content.match(prefixRegex);
  const args = noirmsg.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
    ռօɨʀքʟǟʏɛʀ.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  if (!command) {
    return;
  }
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(noirmsg.author.id)) {
    const expirationTime = timestamps.get(noirmsg.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      const embedNoir1 = new MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
        command.name
      }' command.      `);
      channel.send(embedNoir1).catch(console.error);
      return;
    }
  }
  timestamps.set(noirmsg.author.id, now);
  setTimeout(() => timestamps.delete(noirmsg.author.id), cooldownAmount);
  try {
    command.execute(noirmsg, args);
  } catch (error) {
    console.error(error);
    const embedNoir2 = new MessageEmbed()
      .setColor(`#32CD32`)
      .setAuthor(`𝗡𝗢𝗜𝗥🍀𝗣𝗟𝗔𝗬𝗘𝗥 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
      .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
      .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
      .setDescription(`\n\n
**⚠️Warning⚠️** ${noirmsg.author}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There was an error executing that command.`);
    channel
      .send(embedNoir2)
      .catch(console.error)
      .then((noirmsg) => {
        noirmsg.delete({ timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}` });
        return;
      });
  }
});
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀֆɛʀʋɛʀ.listen(PORT, () => {
  console.log(`noir🍀player = Is running on port ${PORT}`);
});
ռօɨʀքʟǟʏɛʀ.login(ɴᴏɪʀᴇꜱ);

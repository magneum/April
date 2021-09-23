`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
console.clear()
const os = require('os')
require('dotenv').config()
const { join } = require("path");
const express = require('express');
const { readdirSync } = require("fs");
const { Client, Collection } = require("discord.js");
const { ɴᴏɪʀᴇꜱ, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("./noirtem/noir_env.js");
const ռօɨʀքʟǟʏɛʀ = new Client({ disableMentions: "everyone", restTimeOffset: 0 });
ռօɨʀքʟǟʏɛʀ.commands = new Collection();
ռօɨʀքʟǟʏɛʀ.prefix = ʙᴏᴛꜰɪx;
ռօɨʀքʟǟʏɛʀ.queue = new Map();
const ռօɨʀֆɛʀʋɛʀ = express();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "noirhub")).filter((file) => file.endsWith("_ɴᴏɪʀᴇʟᴍx.js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "noirhub", `${file}`));
  ռօɨʀքʟǟʏɛʀ.commands.set(command.name, command);
}
`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
ռօɨʀքʟǟʏɛʀ.on("ready", () => {
  console.clear();
  ռօɨʀքʟǟʏɛʀ.user.setActivity(`${ʙᴏᴛꜰɪx}noir/play/help🦋`, { type: "WATCHING" });
  console.log(`
🦋=======🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋=======🦋
|🦋•Bot_Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|🦋•Bot_Os: ${os.platform().toUpperCase()}
🦋=======🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋=======🦋`);
});
ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
ռօɨʀքʟǟʏɛʀ.on("error", console.error);
`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
ռօɨʀքʟǟʏɛʀ.on(`guildCreate`,
  (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    const embedThanks = new Discord.MessageEmbed()
      .setColor(`#32CD32`)
      .setAuthor(`🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋`)
      .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setDescription(`\n\n
❤️‍🔥 **Hey there MUSIC lovers !**
**:microphone:Noir  =** _I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel._
**:microphone:Noir  =** _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_


:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
**:microphone:Noir  =** _Please use ${ʙᴏᴛꜰɪx}play YouTube Url_
**:microphone:Noir  =** _Please user ${ʙᴏᴛꜰɪx}noir/play/help🦋 to know more_

---------------------|🔺|---------------------
:star:**ɴᴏᴛᴇ to ᴏᴡɴᴇʀ ᴀɴᴅ ᴍᴏᴅᴇʀꜱ**
**:microphone:Noir  =** 🎃**VERY VERY IMPORTANT**🎃_Please use !calib once to calibrate before first use!_`
      );
    channel
      .send(embedThanks)
      .catch(console.error);
    return;
  });
`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
ռօɨʀքʟǟʏɛʀ.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
    if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new Discord.MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋`)


        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
**:microphone:Noir  =** _ᴀ channel ɴᴀᴍᴇ 🦋noir🎧player🦋 has been successfully created._
**:microphone:Noir  =** _Please use the channel for any ʏᴏᴜᴛᴜʙᴇ voice streaming._`);
      message.channel
        .send(embedcheck1)
        .catch(console.error);
      message.guild.channels.create('🦋noir🎧player🦋', {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
          id: message.guild.roles.everyone
        }]
      });
      console.log(`•🦋noir🎧player🦋 ©️• has been successfully created.`);
    } else {
      const embedcheck2 = new Discord.MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
---------------------|🔺|---------------------\n
•|  _ᴀ channel ɴᴀᴍᴇ 🦋noir🎧player🦋 could not be created._
•|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
=𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
=𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
=𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
=𝘌𝘮𝘣𝘦𝘥𝘴`);
      message.channel
        .send(embedcheck2)
        .catch(console.error);
      console.log(`•🦋noir🎧player🦋 ©️• could not be created.`);
      return;
    }
  }
  `=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
  const prefixRegex = new RegExp(`^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ʙᴏᴛꜰɪx)})\\s*`);
  if (!prefixRegex.test(message.content)) {
    return;
  }
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
    ռօɨʀքʟǟʏɛʀ.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) {
    return;
  }
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      const embedNoir1 = new Discord.MessageEmbed()
        .setColor(`#32CD32`)
        .setAuthor(`🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =**  Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${command.name}' command.      `
        );
      channel
        .send(embedNoir1)
        .catch(console.error);
      return;
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    const embedNoir2 = new Discord.MessageEmbed()
      .setColor(`#32CD32`)
      .setAuthor(`🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋`)
      .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =**  There was an error executing that command.`    );
    channel
      .send(embedNoir2)
      .catch(console.error)
      .then((message) => {
        message.delete({ timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}` });
        return;
      });
  }
});
`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
ռօɨʀֆɛʀʋɛʀ.all('/',
  (req, res) => {
    res.send(`
🦋=======🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋=======🦋
|🦋•Bot_Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|🦋•Bot_Os: ${os.platform().toUpperCase()}
🦋=======🦋ɴᴏɪʀ🎧ᴘʟᴀʏᴇʀ🦋=======🦋`);
  })
function ռօɨʀքʟǟʏɛʀֆɛʀʋɛʀ() {
  ռօɨʀֆɛʀʋɛʀ.listen(3000,
    () => {
      console.log(`Server is Ready!`)
    });
}
`=============================================================================================================================
GNU GENERAL PUBLIC LICENSE 
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
🦋noir🎧player🦋   
Discord Music YouTube player 
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=============================================================================================================================`
const PORT = process.env.PORT || 8080;
ռօɨʀքʟǟʏɛʀֆɛʀʋɛʀ()
app.listen(PORT, () =>
  console.log(`🦋noir🎧player🦋 HEROKU Server is listening on ${PORT}`));
ռօɨʀքʟǟʏɛʀ.login(ɴᴏɪʀᴇꜱ);
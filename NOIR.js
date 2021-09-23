const os = require('os')
const { join } = require("path");
const { readdirSync } = require("fs");
const { Client, Collection } = require("discord.js");
const { NOIRDISK, ʙᴏᴛꜰɪx, AUTOCLEANER  } = require("./NOIR_SYSTEM/noir_env.js");


const NOIR = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});
NOIR.commands = new Collection();
NOIR.prefix = ʙᴏᴛꜰɪx;
NOIR.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


NOIR.on("ready", () => {
  console.clear();
  NOIR.user.setActivity(`${ʙᴏᴛꜰɪx}noir/play/help🦋`, { type: "WATCHING" });
  console.log(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**
|🦋••  Bot_Status : Ready! 
|🦋••  Bot_Name   : ${NOIR.user.username}
|🦋••  Bot_Os     : ${os.platform().toUpperCase()}
**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`);
});
NOIR.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
NOIR.on("error", console.error);


NOIR.on(`guildCreate`,
  (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    const embedThanks = new Discord.MessageEmbed()
      .setColor(`0x1f8b4c`)
      .setAuthor(`Author•— HypeVoidSoul`)
      .setFooter(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`)
      .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
      .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
      .setDescription(`\n\n
❤️‍🔥 **Hey there MUSIC lovers !**
•|  _I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel._
•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_


:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
•|  _Please use ${ʙᴏᴛꜰɪx}play YouTube Url_
•|  _Please user ${ʙᴏᴛꜰɪx}noir/play/help🦋 to know more_

---------------------|🔺|---------------------
:star:**ɴᴏᴛᴇ to ᴏᴡɴᴇʀ ᴀɴᴅ ᴍᴏᴅᴇʀꜱ**
•|  🎃**VERY VERY IMPORTANT**🎃_Please use !calib once to calibrate before first use!_`
      );
    channel
      .send(embedThanks)
      .catch(console.error);
    return;
  });


const commandFiles = readdirSync(join(__dirname, "NOIR_HUB")).filter((file) => file.endsWith("_NOIR.js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "NOIR_HUB", `${file}`));
  NOIR.commands.set(command.name, command);
}

NOIR.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
    if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new Discord.MessageEmbed()
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
•|  _ᴀ channel ɴᴀᴍᴇ 🦋noir🎧player🦋 has been successfully created._
•|  _Please use the channel for any ʏᴏᴜᴛᴜʙᴇ voice streaming._`);
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
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
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

  const prefixRegex = new RegExp(`^(<@!?${NOIR.user.id}>|${escapeRegex(ʙᴏᴛꜰɪx)})\\s*`);
  if (!prefixRegex.test(message.content)) {
    return;
  }
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    NOIR.commands.get(commandName) ||
    NOIR.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
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
      message.channel
        .send(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${command.name}' command.`)
      return;
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.channel
      .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️**Noir** There was an error executing that command.")
      .catch(console.error)
      .then((message) => {
        message.delete({
          timeout: `${AUTOCLEANER}`
        });
      });
  }
});
NOIR.login(NOIRDISK);
// ==============================================================================================
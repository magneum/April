const os = require('os')
const { join } = require("path");
const { readdirSync } = require("fs");
const { Client, Collection } = require("discord.js");
const noir_loader = require("./NOIR_SYSTEM/noir_loader");
const { NOIRDISK, PREFIX } = require("./NOIR_SYSTEM/noir_env.js");




const NOIRHelpQ = `📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪n
• !help
== Display all commands and descriptions.
• !loop  
== Toggle music loop.
• !lyrics
== Get lyrics for the currently playing song.
• !nowplaying
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
== Change volume of currently playing music.`;


const NOIR = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});

NOIR.login(NOIRDISK);
NOIR.commands = new Collection();
NOIR.prefix = PREFIX;
NOIR.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


NOIR.on("ready", () => {
  console.clear();
  NOIR.user.setActivity(`🎧 ${PREFIX}noir and ${PREFIX}help`, { type: "WATCHING" });
  console.log(NOIRHelpQ)
  console.log(`—••÷=======[ 🦋NOIR🦋 ]=======÷•—
|🦋••  Bot_Status : Ready! 
|🦋••  Bot_Name   : ${NOIR.user.username}
|🦋••  Bot_Os     : ${os.platform().toUpperCase()}
—••÷=======[ 🦋NOIR🦋 ]=======÷•—`);
});
NOIR.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
NOIR.on("error", console.error);



const commandFiles = readdirSync(join(__dirname, "NOIR_HUB")).filter((file) => file.endsWith("_NOIR.js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "NOIR_HUB", `${file}`));
  NOIR.commands.set(command.name, command);
}

NOIR.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${NOIR.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    NOIR.commands.get(commandName) ||
    NOIR.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

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
      return message.reply(
        noir_loader.__mf("common.ПOIЯD_ᴄᴏᴏʟᴅᴏᴡɴ_ᴍᴇꜱꜱᴀɢᴇ", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ᴄᴏᴍᴍᴀɴᴅ")).catch(console.error);
  }
});

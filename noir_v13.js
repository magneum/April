require("dotenv").config();
const Discord = require("discord.js");
const { ɴᴏɪʀᴇꜱ, ʙᴏᴛꜰɪx } = require("./noirtem/noir_env.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log("On");
});

client.on("messageCreate", (message) => {
  if (
    message.content.startsWith(ʙᴏᴛꜰɪx + "pause") &&
    message.channel.name !== "🤍noir"
  ) {
    message.reply("pong");
  }
});

client.login(ɴᴏɪʀᴇꜱ);

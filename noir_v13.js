const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.on("ready", () => {
  console.log("On");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
    });
  }
});

client.login("ODg3OTQwNjA0MjAwMzg2NTcw.YULdIQ.fPiuxGaaGTXJEs3HijP6joOj004");

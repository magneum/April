`=================================================================—••÷[🕊NOIR🕊]÷••—==========================================================================
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                        —••÷[🕊NOIR🕊]÷••— 
                                                      Discord Music player Bot 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=================================================================—••÷[🕊NOIR🕊]÷••—==========================================================================`
const pnoir = require("../Noir_Sys/pnoir");
const { MessageEmbed } = require("discord.js");
/**
 * 
 * 
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * Discord Music player Bot 
 * has been licensed under GNU General Public License
 * 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * 
 * 
 */
module.exports = {
name: "queue",
cooldown: 5,
description: pnoir.__("queue.ɴᴏɪʀ_description"),
/**
 * 
 * 
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * Discord Music player Bot 
 * has been licensed under GNU General Public License
 * 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * 
 * 
 */
async execute(message, args) {
try { message.delete(); }
catch (error) { console.error(error); }
/**
 * 
 * 
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * Discord Music player Bot 
 * has been licensed under GNU General Public License
 * 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
 * —••÷[🕊NOIR🕊]÷••—  ===================================================================================
 * 
 * 
 */
const permissions = message.channel.permissionsFor(message.client.user);
if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
return message.reply(pnoir.__("queue.ɴᴏɪʀ_missing_Permission_Message"));

const queue = message.client.queue.get(message.guild.id);
if (!queue) return message.channel.send(pnoir.__("queue.ɴᴏɪʀ_error_Not_Queue"));

let currentPage = 0;
const embeds = generateQueueEmbed(message, queue.songs);

const queueEmbed = await message.channel.send(
`**${pnoir.__mf("queue.ɴᴏɪʀ_current_Page")} ${currentPage + 1}/${embeds.length}**`,
embeds[currentPage]
);

try {
await queueEmbed.react("⬅️");
await queueEmbed.react("⏹");
await queueEmbed.react("➡️");
} catch (error) {
console.error(error);
message.channel.send(error.message).catch(console.error);
}

const filter = (reaction, user) =>
["⬅️", "⏹", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });

collector.on("collect", async (reaction, user) => {
try {
if (reaction.emoji.name === "➡️") {
if (currentPage < embeds.length - 1) {
currentPage++;
queueEmbed.edit(
pnoir.__mf("queue.ɴᴏɪʀ_current_Page", { page: currentPage + 1, length: embeds.length }),
embeds[currentPage]
);
}
} else if (reaction.emoji.name === "⬅️") {
if (currentPage !== 0) {
--currentPage;
queueEmbed.edit(
pnoir.__mf("queue.ɴᴏɪʀ_current_Page", { page: currentPage + 1, length: embeds.length }),
embeds[currentPage]
);
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
};

function generateQueueEmbed(message, queue) {
let embeds = [];
let k = 10;

for (let i = 0; i < queue.length; i += 10) {
const current = queue.slice(i, k);
let j = i;
k += 10;

const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join("\n");

const embed = new MessageEmbed()
.setTitle(pnoir.__("queue.ɴᴏɪʀ_embed_Title"))
.setThumbnail(message.guild.iconURL())
.setColor("0x1f8b4c")
.setDescription(
pnoir.__mf("queue.ɴᴏɪʀ_embed_Current_Song", { title: queue[0].title, url: queue[0].url, info: info })
)
.setTimestamp();
embeds.push(embed);
}

return embeds;
}

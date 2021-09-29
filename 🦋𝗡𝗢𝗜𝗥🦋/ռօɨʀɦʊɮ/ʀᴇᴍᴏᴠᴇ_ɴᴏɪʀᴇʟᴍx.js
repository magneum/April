const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ, canModifyQueue } = require("../noirtem/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// =============================================================================================================================
//
// 
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
// 
// =============================================================================================================================
module.exports = {
    name: "remove",
    cooldown: 3,
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    execute(message, args) {
        if (message.content.startsWith(ռօɨʀʄɨӼ + "remove") && message.channel.name !== "💜noir") {
            message.react("❌");
            message.react("🔥");
            message.channel
                .send(new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                    .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                    .setDescription(
                        `
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`💜Noir\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`))
                .catch(console.error)
            // .then((message) => {
            // message.delete({
            // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            // });
            // });
            return;
        }
        if (message.content.startsWith(ռօɨʀʄɨӼ + "remove") && message.channel.name === "💜noir") {
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                message.react("❌");
                message.react("🔥");
                message.channel
                    .send(new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                        .setDescription(
                            `
**User:** ${message.author}
=========⚜️=========

There is no queue.`))
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
                // });
                // });
                return;
            }
            if (!canModifyQueue(message.member)) {
                message.react("❌");
                message.react("🔥");
                message.channel
                    .send(new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                        .setDescription(
                            `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`))
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
                // });
                // });
                return;
            }
            if (!args.length) {
                message.react("❌");
                message.react("🔥");
                message.channel
                    .send(new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                        .setDescription(
                            `
**User:** ${message.author}
=========⚜️=========

⚓️**usage:**${ռօɨʀʄɨӼ}remove <Queue Number>`))
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`
                // });
                // });
                return;
            }
            const arguments = args.join(``);
            const songs = arguments.split(`,`).map((arg) => parseInt(arg));
            let removed = [];
            if (pattern.test(arguments)) {
                queue.songs = queue.songs.filter((item, index) => {
                    if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
                    else return true;
                });
                message.react("✅");
                message.react("🍧");
                queue.textChannel
                    .send(
                        new MessageEmbed()
                            .setColor("#6272a4")
                            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter(
                                "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab"
                            ).setDescription(`**User:** ${message.author}
=========⚜️=========

⏺ Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`)
                    )
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
                // });
                // });
            } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                console.log(`we got elsed!`);
                message.react("✅");
                message.react("🍧");
                queue.textChannel
                    .send(
                        new MessageEmbed()
                            .setColor("#6272a4")
                            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter(
                                "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab"
                            ).setDescription(`**User:** ${message.author}
=========⚜️=========

⏺ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                    )
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`,
                // });
                // });
                return;
            } else {
                console.log(`we got the last one`);
                message.react("❌");
                message.react("🔥");
                message.channel
                    .send(new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
                        .setDescription(
                            `
**User:** ${message.author}
=========⚜️=========

**usage:**${ռօɨʀʄɨӼ}remove <Queue Number>`))
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ռօɨʀքʊʀɢɛʀ}`
                // });
                // });
                return;
            }
        }
    }
};

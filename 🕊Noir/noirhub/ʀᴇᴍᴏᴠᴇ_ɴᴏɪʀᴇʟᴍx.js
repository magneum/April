try {
    const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ, canModifyQueue } = require("../noirtem/noir_env");
    const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
    const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
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
    module.exports = {
        name: "remove",
        cooldown: 3,
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        execute(message, args) {
            if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name !== "🤍noir") {
                message.react("❌");
                message.react("🔥");
                const embedfactor = new MessageEmbed()
                    .setColor("#E0D268")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                    .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                    .setDescription(
                        `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🤍Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`);
                message.channel
                    .send(embedfactor)
                    .catch(console.error)
                // .then((message) => {
                // message.delete({
                // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                // });
                // });
                return;
            }
            // ==================================================================
            // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
            if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name === "🤍noir") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) {
                    const embedrm1 = new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                        .setDescription(
                            `
**User:** ${message.author}
=========:radio_button:=========

There is no queue.`);
                    message.react("❌");
                    message.react("🔥");
                    message.channel
                        .send(embedrm1)
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                    // });
                    // });
                    return;
                }
                // ==================================================================
                // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                // ==================================================================
                if (!canModifyQueue(message.member)) {
                    const embedrm2 = new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                        .setDescription(
                            `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`);
                    message.react("❌");
                    message.react("🔥");
                    message.channel
                        .send(embedrm2)
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                    // });
                    // });
                    return;
                }
                // ==================================================================
                // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                // ==================================================================
                if (!args.length) {
                    const embedrm3 = new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                        .setDescription(
                            `
**User:** ${message.author}
=========:radio_button:=========

⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                    message.react("❌");
                    message.react("🔥");
                    message.channel
                        .send(embedrm3)
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    // });
                    // });
                    return;
                }
                // ==================================================================
                // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                // ==================================================================
                const arguments = args.join(``);
                const songs = arguments.split(`,`).map((arg) => parseInt(arg));
                let removed = [];
                // ==================================================================
                // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                // ==================================================================
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
                                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                                .setFooter(
                                    "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
                                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔴 Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`)
                        )
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                    // });
                    // });
                    // ==================================================================
                    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                    // ==================================================================
                } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                    console.log(`we got elsed!`);
                    message.react("✅");
                    message.react("🍧");
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor("#6272a4")
                                .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                                .setFooter(
                                    "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋"
                                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔴 Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                        )
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                    // });
                    // });
                    return;
                    // ==================================================================
                    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
                    // ==================================================================
                } else {
                    console.log(`we got the last one`);
                    const embedrm4 = new MessageEmbed()
                        .setColor("#E0D268")
                        .setTitle("⚠️Warning⚠️")
                        .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
                        .setDescription(
                            `
**User:** ${message.author}
=========:radio_button:=========

**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                    message.react("❌");
                    message.react("🔥");
                    message.channel
                        .send(embedrm4)
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    // });
                    // });
                    return;
                }
            }
        }
    };
} catch (ErrorNoir) {
    const ErrorInNoir = new MessageEmbed()
        .setColor("#DB4434")
        .setTitle("🔺ERROR CAUGHT🔻")
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
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
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ, canModifyQueue } = require("../noirtem/noir_env");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");

module.exports = {
    name: "remove",
    cooldown: 3,

    execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name !== "noir🎶player") {
            message.react("❌")
            const embedfactor = new MessageEmbed()
                .setColor("#20ab40")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
                .setDescription(
                    `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`noir🎶player\`
Please use 👆🏻 channel for any **ɴᴏɪʀ** commands.`);
            message.channel
                .send(embedfactor)
                .catch(console.error)
                .then((message) => {
                    message.delete({
                        timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                    });
                });
            return;
        }

        if (message.content.startsWith(ʙᴏᴛꜰɪx + "remove") && message.channel.name === "noir🎶player") {
            message.react("✅");
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedrm1 = new MessageEmbed()
                    .setColor("#20ab40")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                    .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                    .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
                    .setDescription(
                        `
**User:** ${message.author}
=========:radio_button:=========

There is no queue.`);
                message.react("❌")
                message.channel
                    .send(embedrm1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }

            if (!canModifyQueue(message.member)) {
                const embedrm2 = new MessageEmbed()
                    .setColor("#20ab40")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                    .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                    .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
                    .setDescription(
                        `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`);
                message.react("❌")
                message.channel
                    .send(embedrm2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }

            if (!args.length) {
                const embedrm3 = new MessageEmbed()
                    .setColor("#20ab40")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                    .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                    .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
                    .setDescription(
                        `
**User:** ${message.author}
=========:radio_button:=========

⚓️**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.react("❌")
                message.channel
                    .send(embedrm3)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
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
                queue.textChannel
                    .send(
                        new MessageEmbed()
                            .setColor("#20ab40")
                            .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                            .setFooter(
                                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                            ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔴 Removed **${removed.map((song) => song.title).join(`\n`)}** from the queue.`)
                    )
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                        });
                    });

            } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                console.log(`we got elsed!`);
                queue.textChannel
                    .send(
                        new MessageEmbed()
                            .setColor("#20ab40")
                            .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                            .setFooter(
                                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                            ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔴 Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                    )
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                        });
                    });
                return;

            } else {
                console.log(`we got the last one`);
                const embedrm4 = new MessageEmbed()
                    .setColor("#20ab40")
                    .setTitle("⚠️Warning⚠️")
                    .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                    .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                    .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
                    .setDescription(
                        `
**User:** ${message.author}
=========:radio_button:=========

**usage:**${ʙᴏᴛꜰɪx}remove <Queue Number>`);
                message.react("❌")
                message.channel
                    .send(embedrm4)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                        });
                    });
                return;
            }
        }
    }
};
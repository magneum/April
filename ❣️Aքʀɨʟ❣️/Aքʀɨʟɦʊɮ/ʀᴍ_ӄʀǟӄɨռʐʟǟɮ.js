const { MessageEmbed } = require('../ӄʀǟӄɨռʐʟǟɮ/src');
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ, canModifyQueue } = require('../Aքʀɨʟռɛʋ/April_env');
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
    name: 'rm',
    cooldown: 3,
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    execute(message, args) {
        try {
            if (message.content.startsWith(AքʀɨʟʄɨӼ + 'rm') && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
                message.react('❌');
                message.react('🔥');
                message.channel
                    .send(new MessageEmbed()
                        .setColor('#FF5F15')
                        .setTitle('⚠️Warning⚠️')
                        .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                        .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                        .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                        .setDescription(
                            `
**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.

---------------:lady_beetle:---------------`))
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                        });
                    });
                return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            if (message.content.startsWith(AքʀɨʟʄɨӼ + 'rm') && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

There is no queue.

---------------:lady_beetle:---------------`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                }
                // =============================================================================================================================
                // GNU GENERAL PUBLIC LICENSE
                // Version 3, 29 June 2007
                // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
                // ============================================================================================================================
                if (!canModifyQueue(message.member)) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

*You need to* **join** *a voice channel first!*

---------------:lady_beetle:---------------`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                }
                // =============================================================================================================================
                // GNU GENERAL PUBLIC LICENSE
                // Version 3, 29 June 2007
                // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
                // ============================================================================================================================
                if (!args.length) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

⚓️**usage:**${AքʀɨʟʄɨӼ}rm <Queue Number>

---------------:lady_beetle:---------------`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`
                            });
                        });
                    return;
                }
                // =============================================================================================================================
                // GNU GENERAL PUBLIC LICENSE
                // Version 3, 29 June 2007
                // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
                // ============================================================================================================================
                const arguments = args.join(``);
                const songs = arguments.split(`,`).map((arg) => parseInt(arg));
                let removed = [];
                if (pattern.test(arguments)) {
                    queue.songs = queue.songs.filter((item, index) => {
                        if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
                        else return true;
                    });
                    message.react('✅');
                    message.react('🍧');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab'
                                ).setDescription(`**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

⏺ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.

---------------:lady_beetle:---------------`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                            });
                        });
                    // =============================================================================================================================
                    // GNU GENERAL PUBLIC LICENSE
                    // Version 3, 29 June 2007
                    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
                    // ============================================================================================================================
                } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                    console.log(`we got elsed!`);
                    message.react('✅');
                    message.react('🍧');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                                .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab'
                                ).setDescription(`**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

⏺ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.

---------------:lady_beetle:---------------`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                    // =============================================================================================================================
                    // GNU GENERAL PUBLIC LICENSE
                    // Version 3, 29 June 2007
                    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
                    // ============================================================================================================================
                } else {
                    console.log(`we got the last one`);
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐀𝐩𝐫𝐢𝐥❣️by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**𝕌𝕤𝕖𝕣:** ${message.author}
---------------:lady_beetle:---------------

**usage:**${AքʀɨʟʄɨӼ}rm <Queue Number>

---------------:lady_beetle:---------------`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`
                            });
                        });
                    return;
                }
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
        } catch (ErrorApril) {
            message.channel.send(
                new MessageEmbed()
                    .setColor('#DB4434')
                    .setTitle('🔺ERROR CAUGHT🔻')
                    .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                    .setThumbnail('https://i.postimg.cc/5tgjvj1y/A.png')
                    .setDescription(`
**April** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorApril}*`)
            );
            console.error(ErrorApril);
        }
    }
};

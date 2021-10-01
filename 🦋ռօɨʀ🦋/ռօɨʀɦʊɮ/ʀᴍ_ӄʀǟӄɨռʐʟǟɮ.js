const { MessageEmbed } = require('../ӄʀǟӄɨռʐʟǟɮ/src');
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ, canModifyQueue } = require('../noirtem/noir_env');
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
            if (message.content.startsWith(ռօɨʀʄɨӼ + 'rm') && message.channel.name !== 'ռօɨʀ💜քʟǟʏɛʀ') {
                message.react('❌');
                message.react('🔥');
                message.channel
                    .send(new MessageEmbed()
                        .setColor('#E0D268')
                        .setTitle('⚠️Warning⚠️')
                        .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                        .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                        .setDescription(
                            `
**User:** ${message.author}
=========⚜️=========

**Category:** \`🔱Krakinz\`
**Channel:** \`ռօɨʀ💜քʟǟʏɛʀ\`
⚠️Please use 👆🏻 for any **ɴᴏɪʀ** commands.`))
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ռօɨʀքʊʀɢɛʀ}`,
                        });
                    });
                return;
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
            if (message.content.startsWith(ռօɨʀʄɨӼ + 'rm') && message.channel.name === 'ռօɨʀ💜քʟǟʏɛʀ') {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#E0D268')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**User:** ${message.author}
=========⚜️=========

There is no queue.`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ռօɨʀքʊʀɢɛʀ}`,
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
                            .setColor('#E0D268')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**User:** ${message.author}
=========⚜️=========

*You need to* **join** *a voice channel first!*`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ռօɨʀքʊʀɢɛʀ}`,
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
                            .setColor('#E0D268')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**User:** ${message.author}
=========⚜️=========

⚓️**usage:**${ռօɨʀʄɨӼ}rm <Queue Number>`))
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ռօɨʀքʊʀɢɛʀ}`
                    // });
                    // });
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
                                .setColor('#6272a4')
                                .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab'
                                ).setDescription(`**User:** ${message.author}
=========⚜️=========

⏺ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ռօɨʀքʊʀɢɛʀ}`,
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
                                .setColor('#6272a4')
                                .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                                .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab'
                                ).setDescription(`**User:** ${message.author}
=========⚜️=========

⏺ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ռօɨʀքʊʀɢɛʀ}`,
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
                            .setColor('#E0D268')
                            .setTitle('⚠️Warning⚠️')
                            .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
                            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                            .setDescription(
                                `
**User:** ${message.author}
=========⚜️=========

**usage:**${ռօɨʀʄɨӼ}rm <Queue Number>`))
                        .catch(console.error)
                    // .then((message) => {
                    // message.delete({
                    // timeout: `${ռօɨʀքʊʀɢɛʀ}`
                    // });
                    // });
                    return;
                }
            }
            // =============================================================================================================================
            // GNU GENERAL PUBLIC LICENSE
            // Version 3, 29 June 2007
            // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
            // ============================================================================================================================
        } catch (ErrorNoir) {
            message.channel.send(
                new MessageEmbed()
                    .setColor('#DB4434')
                    .setTitle('🔺ERROR CAUGHT🔻')
                    .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab')
                    .setThumbnail('https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg')
                    .setDescription(`
**Noir** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorNoir}*`)
            );
            console.error(ErrorNoir);
        }
    }
};

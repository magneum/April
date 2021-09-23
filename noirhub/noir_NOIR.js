`➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                          🦋noir🎧player🦋   
                                                    Discord Music YouTube player 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕`
const { MessageEmbed } = require("discord.js");
const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");


module.exports = {
    name: "noir",



    execute(message, args) {
        let NOIREMBED = new MessageEmbed()
            .setDescription(`
=• **🦋NOIR🦋** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n\n
=• use ${ʙᴏᴛꜰɪx}help to learn how to use **🦋NOIR🦋**\n\n
=• **🦋NOIR🦋** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀`)
            .setColor(`0x1f8b4c`)
            .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
            .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
            .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`);
        message.channel
            .send(NOIREMBED)
            .catch(console.error)
            .then((message) => {
                message.delete({
                    timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`
                });
            })
        return;
    }
};
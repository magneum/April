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
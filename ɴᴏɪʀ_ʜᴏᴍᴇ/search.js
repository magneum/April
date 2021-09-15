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
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const { NOIRTUNE } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys")
const youtube = new YouTubeAPI(NOIRTUNE);
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
  name: "search",
  description: pnoir.__("search.ɴᴏɪʀ_description"),

  async execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    if (!args.length)
      return message
        .reply(pnoir.__mf("search.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix, name: module.exports.name }))
        .catch(console.error);
    if (message.channel.activeCollector) return message.reply(pnoir.__("search.ɴᴏɪʀ_error_Already_Collector"));
    if (!message.member.voice.channel)
      return message.reply(pnoir.__("search.ɴᴏɪʀ_error_NotChannel")).catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new MessageEmbed()
      .setTitle(pnoir.__("search.resultEmbedTtile"))
      .setDescription(pnoir.__mf("search.resultEmbedDesc", { search: search }))
      .setColor("0x1f8b4c");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      let resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
        return pattern.test(msg.content);
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] });
      const reply = response.first().content;

      if (reply.includes(",")) {
        let songs = reply.split(",").map((str) => str.trim());

        for (let song of songs) {
          await message.client.commands
            .get("play")
            .execute(message, [resultsEmbed.fields[parseInt(song) - 1].name]);
        }
      } else {
        const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;
        message.client.commands.get("play").execute(message, [choice]);
      }

      message.channel.activeCollector = false;
      resultsMessage.delete().catch(console.error);
      response.first().delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
      message.reply(error.message).catch(console.error);
    }
  }
};

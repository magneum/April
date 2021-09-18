const noir_loader = require("../NOIR_SYSTEM/noir_loader");

module.exports = {
  name: "ping",
  cooldown: 10,


  execute(message, args) {
    try { message.delete(); }
    catch (error) {
      console.error(error);
      pass;
    }


    message
      .reply(noir_loader.__mf("ping.ПOIЯD_ʀᴇꜱᴜʟᴛ", { ping: Math.round(message.client.ws.ping) }))
      .catch(console.error);
  }
};

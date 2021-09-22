const noir_loader = require("../NOIR_SYSTEM/noir_loader");

module.exports = {
  name: "ping",
  cooldown: 10,


  execute(message, args) {
    // if (message.author) {
    //   message.delete();
    // } 


    message
      .reply(noir_loader.__mf("ping.ПOIЯD_ʀᴇꜱᴜʟᴛ", { ping: Math.round(message.client.ws.ping) }))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};

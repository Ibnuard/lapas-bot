const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { Log } = require("./bin/styles");
const { Handler } = require("./bin");
var os = require("os");

const WAConnect = async () => {
  const BOT = new Client({
    qrMaxRetries: 1,
    authTimeoutMs: 0,
    authStrategy: new LocalAuth(),
    puppeteer: {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--aggressive-cache-discard",
        "--disable-cache",
        "--disable-application-cache",
        "--disable-offline-load-stale-cache",
        "--disk-cache-size=0",
      ],
    },
    webVersionCache: {
      type: "remote",
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html`,
    },
  });

  //IF QR READY
  BOT.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  // Leave Grup on Join Grup
  BOT.on("group_join", async (msg) => {
    const group = await BOT.getChatById(msg.chatId);
    await group.leave();
  });

  // reject on call
  BOT.on("call", async (call) => {
    await call.reject();
  });

  //IF CLIENT READY
  BOT.on("ready", () => {
    console.log(Log.logSuccess("Meoww!"));
  });

  BOT.on("message", async (msg) => {
    await Handler(BOT, msg);
  });

  //START CLIENT
  BOT.initialize();

  BOT.on("disconnected", async (message) => {
    console.log(Log.logWarning("Disconnected : " + message));

    //destroy
    await BOT.destroy();

    //retry to connect
    WAConnect();
  });
};

WAConnect();

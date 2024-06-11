const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { Log } = require("./bin/styles");
const { Handler } = require("./bin");
var os = require("os");
const cron = require("node-cron");
const { exec } = require("child_process");

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
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.50.html`,
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

  BOT.on("disconnected", async (message) => {
    console.log(Log.logWarning("Disconnected : " + message));

    //destroy
    await BOT.destroy();

    //retry to connect
    WAConnect();
  });

  //START CLIENT
  BOT.initialize();

  // Fungsi untuk merestart PM2
  // const restartPM2 = () => {
  //   exec("pm2 restart all", (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error: ${error.message}`);
  //       return;
  //     }
  //     if (stderr) {
  //       console.error(`stderr: ${stderr}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //   });
  // };

  // // Atur jadwal untuk merestart PM2 setiap 24 jam
  // cron.schedule(
  //   "0 0 * * *",
  //   () => {
  //     console.log("Memulai restart PM2...");
  //     restartPM2();
  //   },
  //   {
  //     timezone: "Asia/Jakarta", // Sesuaikan dengan zona waktu Anda
  //   }
  // );
};

WAConnect();

const { MessageMedia } = require("whatsapp-web.js");
const { Meow } = require("../meow");
const {
  checkUserSession,
  updateUserSession,
  updateLastSessionTime,
} = require("./utils");
const { constants } = require("./utils/constants");

//MESSAGE HANDLER
const Handler = async (client, message) => {
  //define message handler
  const cat = await Meow(message, client);

  //send message
  async function sendMessage(content, options, receiver) {
    return await client.sendMessage(receiver ?? message.from, content, options);
  }

  //reply message
  async function replyMessage(content, options, receiver) {
    return await message.reply(content, options);
  }

  // Load Constant
  const USER_SESSION_TYPE = constants.SESSION_LEVEL;
  const USER_REPLY_MASTER = constants.REPLY_MASTER;

  // Handle on received personal message
  if (!cat.isGroup) {
    const session = checkUserSession(cat.author);

    if (cat.msg == "info" || cat.msg == "Info" || cat.msg == "INFO") {
      await sendMessage(USER_REPLY_MASTER.INTRO);
      return;
    }

    // on session intro
    if (session == USER_SESSION_TYPE.INTRO) {
      await sendMessage(USER_REPLY_MASTER.INTRO);
      updateUserSession(cat.author, USER_SESSION_TYPE.SELECT);
    }

    if (session == USER_SESSION_TYPE.SELECT) {
      let media;
      let type;
      switch (cat.msg) {
        case "1":
          media = MessageMedia.fromFilePath("./bin/images/msg1.jpeg");
          type = "image";
          break;
        case "2":
          media = MessageMedia.fromFilePath("./bin/images/msg2.jpeg");
          type = "image";
          break;
        case "3":
          media = [
            MessageMedia.fromFilePath("./bin/images/msg3.jpeg"),
            MessageMedia.fromFilePath("./bin/images/msg3-1.jpeg"),
          ];
          type = "image_multi";
          break;
        case "4":
          media = MessageMedia.fromFilePath("./bin/images/msg4.jpeg");
          type = "image";
          break;
        case "5":
          media = MessageMedia.fromFilePath("./bin/images/msg5.jpeg");
          type = "image";
          break;
        case "6":
          media = USER_REPLY_MASTER.MSG_6;
          type = "text";
          break;
        case "7":
          media = USER_REPLY_MASTER.MSG_7;
          type = "text";
          break;
        default:
          media =
            "Mohon untuk membalas pesan ini dengan angka 1-7 untuk mendapatkan informasi yang anda butuhkan, atau balas dengan 'info' untuk menampilkan menu yang tersedia.";
          type = "text";
          break;
      }

      if (type == "image_multi") {
        for (msg of media) {
          await sendMessage(msg);
        }
        await sendMessage(USER_REPLY_MASTER.MSG_HELP);
        updateLastSessionTime(cat.author);
        return;
      }

      await sendMessage(media);
      await sendMessage(USER_REPLY_MASTER.MSG_HELP);
      updateLastSessionTime(cat.author);
    }
  }
};

exports.Handler = Handler;

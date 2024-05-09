const Meow = async (message, client) => {
  const chat = await message.getChat();
  const msg = message.body;
  const author = message.from;
  const isGroup = chat.isGroup;
  const isBot =
    isGroup &&
    chat.participants.find(
      (chatObj) => chatObj.id.user === client.info.wid.user
    );
  const isBotAdmin = chat.isGroup && isBot.isAdmin;
  const mentions = await message.getMentions();

  const isBotMentioned = isGroup && mentions.find((chatObj) => chatObj.isMe);

  const isAdmin =
    isGroup &&
    chat.participants.find(
      (chatObj) => chatObj.id._serialized === message.author && chatObj.isAdmin
    );

  return {
    chat,
    msg,
    author,
    isGroup,
    isBotAdmin,
    isAdmin,
    mentions,
    isBotMentioned,
  };
};

exports.Meow = Meow;

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Missing Permission: Manage Messages");
  let botmessage = args.slice(1).join(" ");
  console.log(args);
  message.delete().catch();
  bot.guilds
    .first()
    .channels.get(message.mentions.channels.first().id)
    .send(botmessage);
};

module.exports.help = {
  name: "echo"
};

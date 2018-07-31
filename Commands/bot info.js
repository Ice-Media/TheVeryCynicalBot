const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#0087ff")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Version", "1.1.0")
    .addField("Creator", "Cynical's Dev Team")
    .addField("Help?", "!help")

    return message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("Help")
.setColor("#00ff7b")
.addField("!botinfo", "Displays information about this bot.")
.addField("!serverinfo", "Displays information about the server.")
.addField("More Commands Soon to Come", "Be Patient")
.addField("For Administrative Commands:", "Use !admhelp");

return message.channel.send(helpembed);

}

module.exports.help = {
    name: "help"
}
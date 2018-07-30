const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let red = new Discord.RichEmbed()
.setColor("#ff0000")
.setTitle("Red");

let blue = new Discord.RichEmbed()
.setColor("#002eff")
.setTitle("Blue")

let green = new Discord.RichEmbed()
.setColor("#00ff43")
.setTitle("Green")

let lightblue = new Discord.RichEmbed()
.setColor("#0062ff")
.setTitle("Light Blue")

let orange = new Discord.RichEmbed()
.setColor("#ff8a00")
.setTitle("Orange")

let pink = new Discord.RichEmbed()
.setColor("#ff00e2")
.setTitle("Pink")

let purple = new Discord.RichEmbed()
.setColor("#a600ff")
.setTitle("Purple")

return message.channel.send(red)
.then(msg => {
message.channel.send(blue)
.then(msg => {
message.channel.send(green)
.then(msg => {
message.channel.send(lightblue)
.then(msg => {
message.channel.send(orange)
.then(msg => {
message.channel.send(pink)
.then(msg => {
message.channel.send(purple)
});
});
});
});
});
});


}

module.exports.help = {
    name: "colors"
}
const botconfig = require("./botconfig.json");
const versioncontrol = require("./versioncontrol.json")
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

fs.readdir("./Commands", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./Commands/${f}`);
    console.log(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Type !help");
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = "!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.login(botconfig.token).catch(console.error);

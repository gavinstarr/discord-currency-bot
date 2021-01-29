const Discord = require("discord.js");
const chalk = require('chalk');
const escape = require('markdown-escape');
const fs = require('fs');

const client = new Discord.Client();
const settings = require('./config.json');

embedColor = ("0x" + settings.embedColor);

 function getDate() {
     date = new Date();
     cleanDate = date.toLocaleTimeString();
 }


//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

//Events "handler"
fs.readdir('./events/', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        console.log("Successfully loaded " + file);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, settings, ...args));
    });
});

//Startup:
client.on("ready", () => {
    console.log("Ready!");
});

client.login(settings.token);
const Discord = require("discord.js");
const chalk = require('chalk');
const escape = require('markdown-escape');
const fs = require('fs');

const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();

const client = new Discord.Client();
const settings = require('./config.json');
var hasIcon = 'n/a';
embedColor = ("0x" + settings.embedColor);

function getDate() {
    date = new Date();
    cleanDate = date.toLocaleTimeString();
}


Reflect.defineProperty(currency, 'add', {
/* eslint-disable-next-line func-name-matching */
value: async function add(id, amount) {
    const user = currency.get(id);
    if (user) {
        user.balance += Number(amount);
        return user.save();
    }
    const newUser = await Users.create({ user_id: id, balance: amount });
    currency.set(id, newUser);
    return newUser;
},
});




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
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    console.log("Ready!");
});
client.login(settings.token);


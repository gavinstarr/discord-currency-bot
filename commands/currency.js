const Discord = require("discord.js");
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();

Reflect.defineProperty(currency, 'getBalance', {
	/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
}); 

exports.run = async (client, message, args) => {
	//code to run when command is sent
	
	const target = message.mentions.users.first() || message.author;
	return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}NWOC`);
}
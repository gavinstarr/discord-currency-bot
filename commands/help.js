const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {
	//code to run when command is sent
	console.log('Issuing help message for ' + message.author.username);
             const helpEmbed = new Discord.MessageEmbed()
                             .setTitle('put stuff here')
                             .setColor(embedColor)
                             .setDescription('stuff here')
                         message.channel.send(helpEmbed);
             return;
}

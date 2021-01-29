const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {    
    console.log('Issuing about message for ' + message.author.username);
    const serverEmbed = new Discord.MessageEmbed().setTitle(
        'stuff').setColor(embedColor)
        .setDescription('more stuff')
    message.channel.send(serverEmbed);

}

const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {    
    const serverEmbed = new Discord.MessageEmbed().setTitle(
        'stuff').setColor(embedColor)
        .setDescription('more stuff')
    message.channel.send(serverEmbed);

}

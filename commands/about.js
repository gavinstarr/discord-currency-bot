const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {    
    const serverEmbedNoIcon = new Discord.RichEmbed().setTitle(
        'title here').setColor(embedColor)
        .setDescription('put things here')
    message.channel.send(serverEmbedNoIcon);

}

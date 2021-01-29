const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {
    console.log('EA-ing ' + message.author.username);
    
    const serverEmbed = new Discord.MessageEmbed()
        .setDescription('𝑮𝒐 𝒇𝒖𝒄𝒌 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇').setColor(embedColor)
    message.channel.send(serverEmbed);
}

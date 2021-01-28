const Discord = require("discord.js");

exports.run = async (settings, client, message, args) => {    
    const serverEmbedNoIcon = new Discord.RichEmbed().setTitle(
        'Server Info:').setColor(embedColor)
        .setDescription('**Active Plugins:**\n[Death Information](https://www.spigotmc.org/resources/death-info-find-out-exactly-what-happened-at-the-time-of-your-death.71862)\n[ClearLag](https://www.spigotmc.org/resources/clearlagg.68271/)\n[TAB](https://www.spigotmc.org/resources/tab-1-5-x-1-16-4.57806/)\n[Simple Tpa](https://www.spigotmc.org/resources/simple-tpa.64270/)\n[Tree Decapitator](https://www.spigotmc.org/resources/1-16-treegravity.59283)\n[Vein Miner](https://www.spigotmc.org/resources/veinminer.12038/)\n[WitherMC Anti-cheat](https://www.spigotmc.org/resources/wither-anti-cheat-1-13-x-1-16-x-paper-tuinity-support-free-accurate-optimized-anti-cheat.68657)').addField("World Seed:", "`[807582715569628849]`")
    message.channel.send(serverEmbedNoIcon);

}

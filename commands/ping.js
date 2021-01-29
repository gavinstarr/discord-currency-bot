exports.run = async (settings, client, message, args) => {
    console.log('Ponging for ' + message.author.username);
    message.channel.send("Pong")
}

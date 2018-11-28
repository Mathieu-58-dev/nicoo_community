module.exports.run = async (Discord, bot, prefix, args, msg, créateurbot) => {

    msg.channel.send(":ping_pong: Pong").then(message => {
        message.edit(`:ping_pong: Pong | ${message.createdTimestamp-msg.createdTimestamp} ms`);
    }).catch(console.error);
}
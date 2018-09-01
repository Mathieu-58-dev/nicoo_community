module.exports.run = async (bot, prefix, args, msg, flash) => {

    msg.channel.send(":ping_pong: Pong").then(message => {
        message.edit(`:ping_pong: Pong | ${message.createdTimestamp-msg.createdTimestamp} ms`);
    }).catch(console.error);
}
const Discord = require('discord.js')

module.exports.run = async (bot, prefix, args, msg, flash) => {
    let firstMentioned = msg.mentions.users.first();
if (!args[0]){
    let embed0 = new Discord.RichEmbed()
    .setAuthor("Avatar de :" + " @" + msg.author.username + "#" + msg.author.discriminator, msg.author.avatarURL)
    .setImage(msg.author.avatarURL)

    msg.channel.send (embed0)
}
else {
    if (!args[1] && firstMentioned) {
        let embed1 = new Discord.RichEmbed()
        .setAuthor("Avatar de :" + " @" + firstMentioned.username + "#" + firstMentioned.discriminator, firstMentioned.avatarURL)
        .setImage(firstMentioned.avatarURL)

        msg.channel.send(embed1)
    }
    else {
        msg.reply("Il faut que tu mentionnes la personne.")
    }
}
}
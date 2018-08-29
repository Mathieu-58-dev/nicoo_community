const Discord = require('discord.js')

module.exports.run = async (bot, prefix, args, msg, flash) => {
if (msg.member.permissions.has('MANAGE_CHANNELS')) {
    let firstMentioned = msg.mentions.users.first();
    if (args[0] && firstMentioned) {
        let userinfo = new Discord.RichEmbed()
        .setAuthor(firstMentioned.username, firstMentioned.avatarURL)
        .setColor("0x9B59B6")
        .addField("Mention de l'utilisateur : ", firstMentioned.toString(), false)
        .addField('Nom :', firstMentioned.username, false)
        .addField('Nom avec Tag :', firstMentioned.tag, false)
        .addField('Identifiant :', firstMentioned.id, false)
        .addField('Compte crée le :', firstMentioned.createdAt, false)
        .addField('Activité :', firstMentioned.presence.status, false)
        .setThumbnail(firstMentioned.avatarURL);

        msg.channel.send(userinfo).catch(console.error)
    }
    else {
        msg.channel.send(`Il faut la mention de l'utilisateur ${msg.author.toString()}`)
        return;
    }
    }
    else {
        msg.reply(`Tu n'as pas le rôle **"Modérateur Discord"**`)
    }
}
module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
if (msg.member.permissions.has('MANAGE_CHANNELS')) {
    let firstMentioned = msg.mentions.users.first();
    let firstmentionned2 = msg.mentions.members.first();
    if (args[0] && firstMentioned) {
        let userinfo = new Discord.RichEmbed()
        .setAuthor(firstMentioned.tag, firstMentioned.avatarURL)
        .setColor("0x9B59B6")
        .addField('Nom :', firstMentioned.tag, true)
        .addField('Identifiant :', firstMentioned.id, true)
        .addField('Compte crée le :', `${firstMentioned.createdAt.getDay()}/${firstMentioned.createdAt.getMonth()}/${firstMentioned.createdAt.getFullYear()} ${firstMentioned.createdAt.toLocaleTimeString()}`, true)
        .addField('A rejoint le serveur le :', `${firstmentionned2.joinedAt.getDay()}/${firstmentionned2.joinedAt.getMonth()}/${firstmentionned2.joinedAt.getFullYear()} ${firstmentionned2.joinedAt.toLocaleTimeString()}`, true)
        .addField('Rôles possédés :', msg.member.roles.filter(role => role.id !== msg.guild.id).map(role => role.name).join(', '))
        .addField('Activité :', firstMentioned.presence.status ==  "online" ? 'Membre Connecté' : '' || firstMentioned.presence.status ==  "dnd" ? 'Ne pas déranger' : '' || firstMentioned.presence.status ==  "offline" ? 'Membre Déconnecté' : '' || firstMentioned.presence.status ==  "idle" ? 'Membre Inactif' : '', false)
        .addField('Jeu actuel :' , !firstMentioned.presence.game ? "Aucun jeu" : '' || firstMentioned.presence.game ? firstMentioned.presence.game.name : "", false)
        .setThumbnail(firstMentioned.avatarURL);

        msg.channel.send(userinfo)
    }
    else {
        msg.channel.send(`Merci d'indiquer l'utilisateur voulu`)
        return;
    }
    }
    else {
        msg.reply(`Tu n'as pas le rôle **"Modérateur Discord"**`)
    }
}
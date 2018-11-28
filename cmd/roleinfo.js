module.exports.run = async (Discord, bot, prefix, args, msg, créateurbot) => {

var rolemention = msg.mentions.roles.first();

if (msg.content.startsWith(prefix + 'roleinfo')) {
    if (msg.member.permissions.has('MANAGE_ROLES')) {
        if (!args[0]) {
            msg.channel.send('Il faut que tu indique le nom du rôle')
        }
        else {
        if (args[0] == rolemention) {
        let inforole = new Discord.RichEmbed()
        .setColor("0x9B59B6")
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setThumbnail(msg.guild.iconURL)
        .setDescription(`**__Nom du rôle :__** **${rolemention.name}**\n\n
        **__Id du rôle :__** ${rolemention.id}\n\n
        **__Rôle créé le :__** ${rolemention.createdAt}\n\n
        **__Couleur :__** ${rolemention.hexColor}\n\n
        **__Permissions :__** ${rolemention.permissions.toString()}\n\n
        **__Personnes ayant le rôle :__** **${rolemention.members.size}** membres\n\n
        **__Mentionnable :__** ${rolemention.mentionable === true ? true : 'Oui', false ? false : 'Non'}\n\n
        **__Rôle s'affichant séparement des autres rôles :__** ${rolemention.hoist === true ? true : 'Oui', false ? false : 'Non'}`)
        msg.channel.send(inforole)
        }
        else {
            let searchrole = msg.guild.roles.find('name', `${args.join(" ")}`);
               if (args[0] && searchrole) {
                   let inforolesearch = new Discord.RichEmbed()
                    .setColor("0x9B59B6")
                    .setAuthor(msg.guild.name, msg.guild.iconURL)
                    .setThumbnail(msg.guild.iconURL)
                    .setDescription(`**__Nom du rôle :__** ${searchrole.name}\n\n
                    **__Id du rôle :__** ${searchrole.id}\n\n
                    **__Rôle créé le :__** ${searchrole.createdAt}\n\n
                    **__Couleur :__** ${searchrole.hexColor}\n\n
                    **__Permissions :__** ${searchrole.permissions.toString()}\n\n
                    **__Personnes ayant le rôle :__** ${searchrole.members.size} membres\n\n
                    **__Mentionnable :__** ${searchrole.mentionable === true ? true : 'Oui', false ? false : 'Non'}\n\n
                    **__Rôle s'affichant séparement des autres rôles :__** ${searchrole.hoist === true ? true : 'Oui', false ? false : 'Non'}`)
                       msg.channel.send(inforolesearch)
               } 
                else {
                   if (!searchrole) {
                       msg.channel.send('Mots clés incorrects !')
                       return;
                   }
                }
        }
        }
}
else {
    msg.reply('Permissions insuffisantes')
    }
}

}
module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
    
        if (msg.member.permissions.has('MANAGE_CHANNELS')) {
            let serverinfo = new Discord.RichEmbed()
            .setColor("0x9B59B6")
            .setThumbnail(msg.guild.iconURL)
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setDescription(`Nom du serveur : **${msg.guild.name}**, ID : ${msg.guild.id}\n\n
            Propriétaire du serveur : ${msg.guild.owner.toString()} @${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator} ID : ${msg.guild.ownerID}\n\n
            Nombre de rôles : **${msg.guild.roles.size}**\n\n
            Nombre de membres : **${msg.guild.memberCount}**\n\n
            Nombre de bots : **${msg.guild.members.filter(member => member.user.bot).size - 1}**\n\n
            Nombre de salons : **${msg.guild.channels.size}**\n**${msg.guild.channels.filter(channel => channel.type === 'text').size}** salons textuels, **${msg.guild.channels.filter(channel => channel.type === 'voice').size}** salons vocaux\n\n
            Serveur créé le : ${msg.guild.createdAt}\n\n
            Région du serveur : ${msg.guild.region === "eu-central" ? "Europe centrale" : ''}`)
            msg.channel.send(serverinfo)
            }
         else {
    msg.reply(`Tu n'as pas le rôle **"Modérateur Discord"**`)
    
}
}
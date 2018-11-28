module.exports.run = async (Discord, bot, prefix, args, msg, créateurbot) => {
    
var raison = "Aucune raison"
const logs = msg.guild.channels.find("id", "420321529612730368");

    if (msg.member.permissions.has('MANAGE_CHANNELS')) {
        if (isNaN(args[0])) {
            msg.delete()
            msg.reply ("Il faut spécifier le nombre de messages à supprimer")
        }
        else {
            let number = parseInt(args[0])
            if (number >= 100) {
                msg.delete()
                msg.reply("Il m'est impossible de supprimer plus de 100 messages.")
                .then(message => {
                    message.delete(3000)
                }).catch(console.error)
            }
            else {
                msg.delete()
                msg.channel.bulkDelete(number + 1).then(messages => {
                    msg.reply(messages.size - 1 + " messages ont été supprimés !")
                    .then(message => {
                        message.delete(3000)
                    }).catch(console.error)
                    if (args[1] !== undefined) {
                        delete args[0]
                        raison = args.join(" ")
                    }

                    let embed4 = new Discord.RichEmbed()
                    .setAuthor("Clear effectué", msg.author.avatarURL)
                    .setColor("0xf4e541")
                    .setFooter("Date du clear :")
                    .setTimestamp(new Date())
                    .addField("Par :", msg.author.toString(), true)
                    .addField("Salon :", msg.channel, true)
                    .addField("Nombre total de messages supprimés :", messages.size - 1, true)
                    .addField("Raison :", raison, true)
                    logs.send(embed4)
                }).catch(console.error)

            }
        }
    }
    else {
        msg.reply (`:x: Rôle requis : **"Modérateur Discord"**`)
        .then(message => {
            message.delete(3000)
        })
    }
}
module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
    
const logs = msg.guild.channels.find("id", "420321529612730368");
var raison = "Aucune raison"
var firstMentioned = msg.mentions.members.first();

      if (msg.member.permissions.has('MANAGE_CHANNELS')) {
          if (args[0] == firstMentioned) {
              if (msg.mentions.members.first().bannable) {
                  if (args[1] !== undefined) {
                      delete args[0]
                      raison = args.join(" ")
                  }
            msg.guild.member(firstMentioned).ban({days: 7, reason: raison}).then((member) => {
                msg.channel.send(`${member} à été banni.`).then(flash)
            }).catch(console.error)
                var embed1 = new Discord.RichEmbed()
                    .setAuthor("Ban effectué", msg.author.avatarURL)
                    .setColor("0x19e212")
                    .setFooter("Date du ban :")
                    .setThumbnail(firstMentioned.avatarURL)
                    .setTimestamp(new Date())
                    .addField("Par :", msg.author.toString(), true)
                    .addField("Membre Banni :", firstMentioned.user.username + "#" + firstMentioned.user.discriminator, true)
                    .addField("Raison :", raison, true)
    
                logs.send(embed1)
              }
                else {
                    msg.reply (":x: Erreur.")
                    .then(flash)
                }
            }
            else {
                msg.reply ("Il faut que tu mentionnes la personne pour que je le ban.")
                .then(flash)
            }
        }
        else {
            msg.reply (`:x: Tu n'as pas le rôle **"Modérateur Discord"**`)
            .then(flash)
        }
}
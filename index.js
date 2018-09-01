//Bot développé par @Mathieu#3299

//Language de programation : JavaScript
const config = require('./config/config.json');
const Discord = require ("discord.js");
const bot = new Discord.Client();
const prefix = config.prefix;
const créateurbot = config.créateur;
const fs = require('fs');
bot.commands = new Discord.Collection();

fs.readdir("./cmd/", (err, files) => {
    if (err) console.log(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js')
    if (jsfiles.length <= 0) {
        console.log("Aucune commande chargée (Pas de fichier .js dans le dossier)");
        return;
    }

    console.log(`Chargement de ${jsfiles.length} fichiers !`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmd/${f}`);
        console.log(`${i + 1}: ${f} chargé !`);
        bot.commands.set(f, props);
    });
});

function flash(msg, delay = 1500) {
  setTimeout(() => msg.delete(), delay)
}

bot.on("message", async msg => {
    if (msg.author.bot) return;

    if (msg.content.indexOf(prefix) !== 0 || msg.content.trim() == prefix) return false;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g)

    const command = args.shift().toLowerCase()

    let cmd = bot.commands.get(command + ".js")
    if (cmd) cmd.run(bot, prefix, args, msg, flash, créateurbot); //else msg.reply("Commande inconnue, écris `"+ prefix + "aide` pour afficher l'aide :wink:").then(msg => flash(msg, 3000))

    var firstMentioned = msg.mentions.users.first();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const NotifVidéo = msg.guild.roles.find("id", "466259636815790091") //id serv officiel : 466259636815790091
const NotifLive = msg.guild.roles.find("id", "466259943473807361") //id serv officiel : 466259943473807361
const NotifTwitter = msg.guild.roles.find("id", "466259754256302091") //id serv officiel : 466259754256302091

    if (msg.content === (prefix + "Vidéo Notif")||(msg.content === (prefix + "video notif"))||(msg.content === (prefix + "notif video"))||msg.content === prefix + "Notif Vidéo") {
        if (!msg.member.roles.has("466259636815790091")){
            msg.member.addRole (NotifVidéo)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Vidéo ! Vous serez désormais notifié lorsque NICOO postera une Vidéo !")
        }
        else {
            msg.member.removeRole (NotifVidéo)
            msg.reply (":white_check_mark: Rôle retiré : Notif Vidéo ! Vous ne serez plus notifié lorsque NICOO sortira une vidéo !")
        }
    };

    if (msg.content === (prefix + "Live Notif")||(msg.content === (prefix + "live notif"))||(msg.content === (prefix + "notif live"))||msg.content === prefix + "Notif Live") {
        if (!msg.member.roles.has("466259943473807361")){
            msg.member.addRole (NotifLive)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Live ! Vous serez désormais notifié lorsque NICOO commencera un live !")
        }
        else {
            msg.member.removeRole (NotifLive)
            msg.reply (":white_check_mark: Rôle retiré : Notif Live ! Vous ne serez plus notifié lorsque NICOO commencera un live !")
        }
    };

    if (msg.content === (prefix + "Twitter Notif")||(msg.content === (prefix + "twitter notif"))||(msg.content === (prefix + "Notif Twitter"))||msg.content === prefix + "notif twitter"||(msg.content === (prefix + "Notif twitter"))) {
        if (!msg.member.roles.has("466259754256302091")){
            msg.member.addRole (NotifTwitter)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Twitter ! Vous serez désormais notifié lorsque NICOO postera un nouveau Tweet !")
        }
        else {
            msg.member.removeRole (NotifTwitter)
            msg.reply (":white_check_mark: Rôle retiré : Notif Twitter ! Vous ne serez plus notifié lorsque NICOO postera un nouveau Tweet !")
        }
    };
//Modération

const logs = msg.guild.channels.find("id", "420321529612730368");
var raison = "Aucune raison"
if (msg.content.startsWith (prefix + `ban`)) {
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
                .addField("Membre Banni :", firstMentioned.username + "#" + firstMentioned.discriminator, true)
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

if (msg.content.startsWith (prefix + "clear")) {
    if (msg.member.permissions.has('MANAGE_CHANNELS')) {
        if (isNaN(args[0])) {
            msg.reply ("Il faut spécifier le nombre de messages à supprimer")
        }
        else {
            let number = parseInt(args[0])
            if (number >= 100) {
                msg.reply("Il m'est impossible de supprimer plus de 100 messages.")
                .then(flash).catch(console.error)
            }
            else {

                msg.channel.bulkDelete(number + 1).then(messages => {
                    msg.reply(messages.size - 1 + " messages ont été supprimés !")
                    .then(flash).catch(console.error)
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
        .then(flash)
    }
}
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
});

//.then(msg => flash(msg, 3000))

bot.on("guildMemberAdd", member => {
    let logs = member.guild.channels.find("id", "420321529612730368")
    let regles = member.guild.channels.find('id', "335759570775441408"); //id channel règlement
    let channel = member.guild.channels.find("id", "414468712754577428"); //id channel bienvenue
    channel.send (`:wave: Bienvenue ${member} sur le serveur de ${member.guild.name} ! :tada: **Membre n°${member.guild.memberCount + 1}** :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} !` + "```\n```");
    console.log (`${member} à rejoint le serveur officiel de NICOO !`);
    let bienvenue = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setColor("0xf4e541")
    .setThumbnail(member.user.avatarURL)
    .setTitle(`Un membre à rejoint le serveur : ${member.user.username}`)
    .setDescription(`Nom : **${member.user.username}#${member.user.discriminator}**\n\nId : **${member.user.id}**`)
    .setFooter("Date :")
    .setTimestamp(new Date())
    logs.send(bienvenue)
});

bot.on('guildMemberRemove', member => {
    let logsremove = member.guild.channels.find("id", "420321529612730368")
    let remove = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setColor("0xf4e541")
    .setThumbnail(member.user.avatarURL)
    .setTitle(`Un membre est parti : ${member.user.username}`)
    .setDescription(`Nom : **${member.user.username}#${member.user.discriminator}**\n${member.user.toString()}\n\nId : **${member.user.id}**`)
    .setFooter("Date :")
    .setTimestamp(new Date())
    logsremove.send(remove)
});
//token

bot.login (process.env.BOT_TOKEN);

//Connection et statut de jeu

bot.on("ready", () => {
    bot.user.setActivity(`la communauté ! | Afficher l'aide : ${prefix}aide`, {type: 'WATCHING'}).catch(console.error)
    console.log (`Bot connecté.`);
});

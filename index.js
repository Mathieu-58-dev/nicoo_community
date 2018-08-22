//Bot développé par @Mathieu#3299

//// Language de programation : Node.JS

const Discord = require ("discord.js");
const bot = new Discord.Client();
const prefix = "!!";
const créateurbot = "@Mathieu#3299";
const fs = require('fs')


//token

bot.login ("process.env.BOT_TOKEN");

//Connection et statut de jeu

bot.on("ready", () => {
    bot.user.setActivity(`la communauté ! | Afficher l'aide : !aide`, {type: 'WATCHING'});
    console.log (`Bot connecté.`);
});
bot.on("message", msg => {

    var cont = msg.content.slice(prefix.length).split(" "); 
    var args = cont.slice(1);
    var firstMentioned = msg.mentions.users.first();
//Commandes de base

    if (msg.content === (prefix + "ping")) {
        msg.channel.send(":ping_pong: Pong").catch(console.error).then(message => {message.edit(`:ping_pong: Pong | ${message.createdTimestamp-msg.createdTimestamp} ms`);});
    };

    if (msg.content === (prefix + "classement")||msg.content === (prefix + "levels")||msg.content === (prefix + "level")) {
        msg.reply ("Le classement des membres les plus bavards du discord : https://mee6.xyz/leaderboard/277543113302736898")
    };


    if (msg.content.startsWith(prefix + "avatar")) {
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
    };

//COMMANDE AIDE\\

    if (msg.content === (prefix + "aide")) {
        msg.channel.send ({embed: {
            color: 14525541,
            title: "Page d'aide du bot !",
           description: ":arrow_down: **Obtenez toutes les commandes du bot. **:arrow_down:",
          fields: [{
              
              name: prefix + "avatar",
              value: "Cette commande affichera votre avatar Discord. (Votre Photo de Profil)"
            },
            {
              name: prefix + "classement",
              value: "Cette commande affichera le classement du serveur. (!rank avec MEE6)"
            },
            {
                name: prefix + "ping",
                value: "Cette commande affichera le ping du bot."
            },
            {
                name: prefix + "suggestion",
                value: `Cette commande vous permettera de faire part de votre suggestion pour le serveur.`
            },
            {
                name: prefix + "sondage",
                value: `Utilisez cette commande pour faire des sondages. **(Rôle requis : "Modérateur Discord")**`
            },
            {
                name: prefix + "rôles",
                value: "Cette commande affichera la page d'aide d'attribution et de retrait de rôles"
            },
            {
                name: prefix + "infos",
                value: "Cette commande affichera les informations de NICOO."
            },
            {
                name: prefix + "modération",
                value: `Cette commande affichera les commandes de modération. **(Rôle requis : "Modérateur Discord")**`
            }
            ],
            timestamp: new Date(),
            footer: {
              text: `Bot créé par ${créateurbot} -> Pour NICOO. || Page d'aide générale`
            }
          }   
        });
    };

//Commandes pour donner des rôles

if (msg.content === (prefix + "roles")||(msg.content === (prefix + "role"))||(msg.content === (prefix + "rôles"))|(msg.content === (prefix + "rôle"))) {
    msg.channel.send ({embed: {
        color: 14525541,
        title: "Rôles à vous attribuer / retirer vous même.",
        description: ":arrow_down:  **En effectuant les commandes ci-dessous, vous allez pouvoir vous attribuer / vous retirer des rôles**  :arrow_down:",
        fields: [{  
                    name: prefix + "pc",
                    value: "Obtenez le grade **PC** ! (Joueur Fortnite sur PC)"
        },
        {           name: prefix + "ps4",
                    value: "Obtenez le grade **PS4** ! (Joueur Fortnite sur PS4)"
        },
        {           name: prefix + "xbox",
                    value: "Obtenez le grade **XBOX** ! (Joueur Fortnite sur XBOX)"
        },
        {           name: prefix + "switch",
                    value: "Obtenez le grade **Switch** ! (Joueur Fortnite sur Switch)"
        },
        {           name: prefix + "téléphone",
                    value: "Obtenez le grade **Téléphone** ! (Joueur Fortnite sur Téléphone)"
        },
        {           name: prefix + "Notif Vidéo",
                    value: "Obtenez le grade **Notif Vidéo** ! (Vous serez notifié lorsque NICOO sortira une Vidéo !) "
        },       
        {           name: prefix + "Notif Live",
                    value: "Obtenez le grade **Notif Live** ! (Vous serez notifié lorsque NICOO commencera un live !)"
        },
        {           name: prefix + "Notif Twitter",
                    value: "Obtenez le grade **Notif Twitter** ! (Vous serez notifié lorsque NICOO aura posté un tweet !)"
        }],
        timestamp: new Date(),
        footer: { text: `Bot créé par ${créateurbot} -> Pour NICOO. || Page 1 / S'attribuer des rôles` }
      }   
    });
};

const PC = msg.guild.roles.find ("id", "466208062298914826") //id serv officiel : 466208062298914826
const PS4 = msg.guild.roles.find ("id", "466208170428334106") //id serv officiel : 466208170428334106
const XBOX = msg.guild.roles.find ("id", "466208324241850388") //id serv officiel : 466208324241850388
const Switch = msg.guild.roles.find ("id", "461210587188166657") //id serv officiel : 461210587188166657
const Téléphone = msg.guild.roles.find ("id", "466208425508864010") //id serv officiel : 466208425508864010
const NotifVidéo = msg.guild.roles.find ("id", "466259636815790091") //id serv officiel : 466259636815790091
const NotifLive = msg.guild.roles.find ("id", "466259943473807361") //id serv officiel : 466259943473807361
const NotifTwitter = msg.guild.roles.find ("id", "466259754256302091") //id serv officiel : 466259754256302091


    if (msg.content === (prefix + "pc")||(msg.content === (prefix + "PC"))) {
        if (!msg.member.roles.has("466208062298914826")) {
            msg.member.addRole (PC)
            msg.reply (":white_check_mark: Rôle ajouté : PC, **Bon jeu !**")
        }
        else {
            msg.member.removeRole (PC)
            msg.reply (":white_check_mark: Rôle retiré : PC")

        }
    };

    if (msg.content === (prefix + "ps4")||(msg.content === (prefix + "PS4"))) {
        if (!msg.member.roles.has("466208170428334106")) {   
            msg.member.addRole (PS4)
            msg.reply (":white_check_mark: Rôle ajouté : PS4, **Bon jeu !**")
        }
        else {
            msg.member.removeRole (PS4)
            msg.reply (":white_check_mark: Rôle retiré : PS4")
        }
    };

    if (msg.content === (prefix + "xbox")||(msg.content === (prefix + "XBOX"))) {
        if (!msg.member.roles.has("466208324241850388")) {   
            msg.member.addRole (XBOX)
            msg.reply (":white_check_mark: Rôle ajouté : XBOX, **Bon jeu !**")
        }
        else {
            msg.member.removeRole (XBOX)
            msg.reply (":white_check_mark: Rôle retiré : XBOX")
        }
    };

    if (msg.content === (prefix + "switch")||(msg.content === (prefix + "SWITCH"))) {
        if (!msg.member.roles.has("461210587188166657")) {   
            msg.member.addRole (Switch)
            msg.reply (":white_check_mark: Rôle ajouté : Switch, **Bon jeu !**")
        }
        else {
            msg.member.removeRole (Switch)
            msg.reply (":white_check_mark: Rôle retiré : Switch")
        }
    };

    if (msg.content === (prefix + "tel")||(msg.content === (prefix + "téléphone"))||(msg.content === (prefix + "telephone"))||(msg.content === (prefix + "TELEPHONE"))) {
        if (!msg.member.roles.has("466208425508864010")) {   
            msg.member.addRole (Téléphone)
            msg.reply (":white_check_mark: Rôle ajouté : Téléphone, **Bon jeu !**")
        }
        else {
            msg.member.removeRole (Téléphone)
            msg.reply (":white_check_mark: Rôle retiré : Téléphone")
        }
    };

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

//infos

    if (msg.content === (prefix + "infos")||(msg.content === (prefix + "info"))) {
        msg.channel.send ({embed: {
            color: 14525541,
            description: ":arrow_down:  **Retrouvez toutes les informations de NICOO ci-dessous**  :arrow_down:",
            fields: [{
                        name: prefix + "Discord",
                        value: "https://discord.gg/nicoo"
                },
                {       name: prefix + "Youtube",
                        value: "https://www.youtube.com/channel/UCITUWtKtOrpGuFT-iADXEAQ"
                },
                {       name: prefix + "Twitter",
                        value: "https://twitter.com/nicoo_off"
                },
                {       name: prefix + "Instagram",
                        value: "https://www.instagram.com/nicoo_off/"
                },
                {       name: prefix + "Créateur",
                        value: `Bot développé par ${créateurbot}`
                }
            ],
            timestamp: new Date(),
            footer: {
              text: `Bot créé par ${créateurbot} -> Pour NICOO.`
            }
          }  
        });
    };

    if (msg.content.startsWith (prefix + "suggestion")){
        if (!args[0]) {
            msg.channel.send("Impossible d'envoyer la suggestion ! Il n'y a pas d'arguments après la commande !")
        }
        else {
            let suggestionchannel = msg.guild.channels.find("id", "453611739276378123")
            suggestionchannel.send({embed:{
                fields: [{
                    name: `**__Nouvelle suggestion !__**`,
                    value: "-----------------------\n" + args.join(" ") + ""
                    }],
                    timestamp: new Date(),
                footer: {
                    text: `Date d'envoi :`
            }}});
            suggestionchannel.send("Autheur de la suggestion : " + msg.author.toString())
        };
};

    if (msg.content.startsWith (prefix + "sondage")){
        if (msg.member.permissions.has('MANAGE_CHANNELS')) {
            if (!args[0]) {
                msg.channel.send("Il faut que tu me précise ce que tu veux que je note !")
            }
            else {
                msg.delete().catch(console.error)
                msg.channel.send({embed:{
                    fields: [{
                        name: `**__Nouveau sondage !__**`,
                        value: "-----------------------***\n" + args.join(" ") + "***"
                        }],
                        timestamp: new Date(),
                footer: {
                    text: `Date d'envoi :`
            }}}).catch(console.error)
                msg.channel.send('@everyone')
            };
        }
        else {
            msg.reply(`Tu dois posséder le grade "Modérateur Discord" pour effectuer la commande.`)
        };
    };

//Modération

const logs = msg.guild.channels.find("id", "420321529612730368");
var raison = "Aucune raison"
function flash(delay = 1500) {
    setTimeout(() => msg.delete(), delay)
}
    if (msg.content === (prefix + "modération")) {
        if (msg.member.permissions.has('MANAGE_CHANNELS')) {
            msg.channel.send ({embed:{
                color: 14525541,
                title: "Page de modération !",
                description: ":arrow_down:  **__Commandes de modération__**  :arrow_down:",
                fields: [{
                    
                    name: prefix + "ban",
                    value: "Permet de ban une personne (pas encore fonctionnel)"
                },

                {
                    name: prefix + "clear",
                    value: "Permet de clear un nombre spécifique de messages"
                }
            ]
            }})
        }
        else {
            msg.reply (`:x: **Rôle requis : "Modérateur Discord"**`)
        }
    }

if (msg.content.startsWith (prefix + `ban`)) {
    if (msg.member.permissions.has('MANAGE_CHANNELS')) {
        if (args[0] == firstMentioned) {
            if (msg.mentions.members.first().bannable) { 
                if (args[1] !== undefined) {
                    delete args[0]
                    raison = args.join(" ")
                }
            msg.guild.member(firstMentioned).ban({days: 7, reason: raison}).then((member) => {          
            msg.channel.send (`${member} à été banni.`)}).then(() => console.log).catch(console.error)
            .then(flash)
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
            if (number > 100) {
                msg.reply("Il m'est impossible de supprimer plus de 100 messages.")
                .then(flash)
            }
            else {
                
                msg.channel.bulkDelete(number + 1).then(messages => {
                    msg.reply(messages.size - 1 + " messages ont été supprimés !")
                    .then(flash)
                    if (args[1] !== undefined) {
                        delete args[0]
                        raison = args.join(" ")
                    }

                    let embed4 = new Discord.RichEmbed()
                    .setAuthor("Clear effectué", msg.author.avatarURL)
                    .setColor("0xf4e541")
                    .setFooter("Date du clear :")
                    .setTimestamp(new Date())
                    .addField("Commande efféctué :", "`!!clear` " + args.join(" "), false)
                    .addField("Par :", msg.author.toString(), true)
                    .addField("Salon :", msg.channel, true)
                    .addField("Nombre total de messages supprimés :", messages.size - 1, true)
                    .addField("Raison :", raison, true)
                    logs.send(embed4)
                })             
               
            }
        }
    }
    else {
        msg.reply (`:x: Rôle requis : **"Modérateur Discord"**`)
        .then(flash)
    }
}

});

//.then(msg => flash(msg, 3000))

bot.on("guildMemberAdd", member => {
    let logs = member.guild.channels.find("id", "420321529612730368")
    let regles = member.guild.channels.find('id', "335759570775441408"); //id channel règlement
    let channel = member.guild.channels.find("id", "414468712754577428"); //id channel bienvenue
    channel.send (`:wave: Bienvenue ${member} sur le serveur de NICOO ! :tada: **Membre n°${member.guild.memberCount}** :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} !` + "```\n```");
    console.log (`${member} à rejoint le serveur.`);
    
});

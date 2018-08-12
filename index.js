//Bot développé par @Mathieu#2000

//// Language de programation : Node.JS

const Discord = require ("discord.js");
const bot = new Discord.Client();
const prefix = "!!";
const prefix2 = "!del ";
const créateurbot = "@Mathieu#2000";

//token

bot.login (process.env.BOT_TOKEN);

//Connection et statut de jeu

bot.on("ready", () => {
    bot.user.setActivity (`Version [Bêta] | ${bot.users.size} utilisateurs`);
    console.log (`${bot.user.tag} est prêt !`);
});

bot.on("guildMemberAdd", member => {
    if (member.guild.id === "464383662956216321") {
        let regles = member.guild.channels.find('id', "335759570775441408"); //id channel règlement
        let channel = member.guild.channels.find("id", "414468712754577428"); //id channel bienvenue
        channel.send (`:wave: Bienvenue ${member} sur le serveur de NICOO ! :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} !` + "```\n```");
        console.log (`${member} à rejoint le serveur officiel de NICOO !`);
    };

    if (member.guild.id === "466149323088855040") {
        let regles = member.guild.channels.find('id', "466169480364425216"); //id channel règlement
        let infos = member.guild.channels.find("id", "468744485036228608");
        let channel = member.guild.channels.find("id", "469525608922349575"); //id channel bienvenue
        let autorole = member.guild.roles.find("id", "466962327464443906");
        channel.send (`:wave: Bienvenue ${member} sur le serveur de NICOO ! :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} et ${infos} !` + "```\n```");
        member.addRole (autorole);
        console.log (`${member} à rejoint le serveur Public test du bot !`); 
    };
});

bot.on("message", msg => {
var cont = msg.content.slice(prefix.length).split(" "); 
var args = cont.slice(1);
var firstMentioned = msg.mentions.users.first(); 

//Commandes de base

    if (msg.content === (prefix + "ping")) {
        msg.channel.send(`:ping_pong: Pong : ` + Math.round(bot.ping) + "ms"); 
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
              value: "Cette commande affichera votre avatar Discord."
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
                value: `Utilisez cette commande pour faire des sondages. (Grade requis : "Modérateur Discord")`
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
                value: `Cette commande affichera les commandes de modération. **(Rôle requis : "Modérateur Discord")`
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
        title: "Rôles à vous attribuer vous même.",
        description: ":arrow_down:  **En effectuant les commandes ci-dessous, vous allez pouvoir vous attribuer des rôles**  :arrow_down:",
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

const PC = msg.guild.roles.find ("id", "466208062298914826") //id serv officiel : 466208062298914826 //id serv test : 466174771491504137
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
            msg.reply (":x: Erreur : Tu as déjà le rôle **PC**")
        }
    };

    if (msg.content === (prefix + "ps4")||(msg.content === (prefix + "PS4"))) {
        if (!msg.member.roles.has("466208170428334106")) {   
            msg.member.addRole (PS4)
            msg.reply (":white_check_mark: Rôle ajouté : PS4, **Bon jeu !**")
        }
        else {
            msg.reply (":x: Erreur : Tu as déjà le rôle **PS4**")
        }
    };

    if (msg.content === (prefix + "xbox")||(msg.content === (prefix + "XBOX"))) {
        if (!msg.member.roles.has("466208324241850388")) {   
            msg.member.addRole (XBOX)
            msg.reply (":white_check_mark: Rôle ajouté : XBOX, **Bon jeu !**")
        }
        else {
            msg.reply (":x: Erreur : Tu as déjà le rôle **XBOX**")
        }
    };

    if (msg.content === (prefix + "switch")||(msg.content === (prefix + "SWITCH"))) {
        if (!msg.member.roles.has("461210587188166657")) {   
            msg.member.addRole (Switch)
            msg.reply (":white_check_mark: Rôle ajouté : Switch, **Bon jeu !**")
        }
        else {
            msg.reply(":x: Erreur : Tu as déjà le rôle **Switch**")
        }
    };

    if (msg.content === (prefix + "tel")||(msg.content === (prefix + "téléphone"))||(msg.content === (prefix + "telephone"))||(msg.content === (prefix + "TELEPHONE"))) {
        if (!msg.member.roles.has("466208425508864010")) {   
            msg.member.addRole (Téléphone)
            msg.reply (":white_check_mark: Rôle ajouté : Téléphone, **Bon jeu !**")
        }
        else {
            msg.reply(":x: Erreur : Tu as déjà le rôle **Téléphone**")
        }
    };

    if (msg.content === (prefix + "Vidéo Notif")||(msg.content === (prefix + "video notif"))||(msg.content === (prefix + "notif video"))||msg.content === prefix + "Notif Vidéo") {
        if (!msg.member.roles.has("466259636815790091")){   
            msg.member.addRole (NotifVidéo)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Vidéo ! Vous serez désormais notifié lorsque NICOO postera une Vidéo !")
        }
        else {
            msg.reply(":x: Erreur : Tu as déjà le rôle **Notif Vidéo**")
        }
    };  

    if (msg.content === (prefix + "Live Notif")||(msg.content === (prefix + "live notif"))||(msg.content === (prefix + "notif live"))||msg.content === prefix + "Notif Live") {
        if (!msg.member.roles.has("466259943473807361")){
            msg.member.addRole (NotifLive)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Live ! Vous serez désormais notifié lorsque NICOO commencera un live !")
        }
        else {
            msg.reply(":x: Erreur : Tu as déjà le rôle **Notif Live**")
        }
    };

    if (msg.content === (prefix + "Twitter Notif")||(msg.content === (prefix + "twitter notif"))||(msg.content === (prefix + "Notif Twitter"))||msg.content === prefix + "notif twitter"||(msg.content === (prefix + "Notif twitter"))) {
        if (!msg.member.roles.has("466259754256302091")){ 
            msg.member.addRole (NotifTwitter)
            msg.reply (":white_check_mark: Rôle ajouté : Notif Twitter ! Vous serez désormais notifié lorsque NICOO postera un nouveau Tweet !")
        }
        else {       
            msg.reply(":x: Erreur : Tu as déjà le rôle **Notif Twitter**")
        }
    };

//Commandes pour retirer des rôles

if (msg.content === (prefix + "roles")||(msg.content === (prefix + "role"))||(msg.content === (prefix + "rôles"))|(msg.content === (prefix + "rôle"))) {
    msg.channel.send ({embed: {
        color: 14525541,
        title: "**Rôles à vous retirer vous même.**",
        description: ":arrow_down:  **En effectuant les commandes ci-dessous, vous allez pouvoir vous retirer des rôles**  :arrow_down:",
        fields: [{
                    name: prefix2 + "pc",
                    value: "Retirez vous le grade **PC** ! (Joueur Fortnite sur PC)"
        },
        {           name: prefix2 + "ps4",
                    value: "Retirez vous le grade **PS4** ! (Joueur Fortnite sur PS4)"
        },
        {           name: prefix2 + "xbox",
                    value: "Retirez vous le grade **XBOX** ! (Joueur Fortnite sur XBOX)"
        },
        {           name: prefix2 + "switch",
                    value: "Retirez vous le grade **Switch** ! (Joueur Fortnite sur Switch)"
        },
        {           name: prefix2 + "téléphone",
                    value: "Retirez vous le grade **Téléphone** ! (Joueur Fortnite sur Téléphone)"
        },
        {           name: prefix2 + "Notif Vidéo",
                    value: "Retirez vous le grade **Notif Vidéo** ! (Vous ne serez plus notifié lorsque NICOO sortira une Vidéo !) "
        },
        {           name: prefix2 + "Notif Live",
                    value: "Retirez vous le grade **Notif Live** ! (Vous ne serez plus notifié lorsque NICOO commencera un live !)"
        },
        {           name: prefix2 + "Notif Twitter",
                    value: "Retirez vous le grade **Notif Twitter** ! (Vous ne serez plus notifié lorsque NICOO aura posté un tweet !)"
        }],
        timestamp: new Date(),
        footer: { text: "Bot créé par @Mathieu#2000 -> Pour NICOO. || Page 2 / Se retirer des rôles" }
      }   
    });
};

    if (msg.content === (prefix2 + "pc")||(msg.content === (prefix2 + "PC"))) {
        if (msg.member.roles.has("466208062298914826")) {
            msg.member.removeRole (PC)
            msg.reply (":white_check_mark: Rôle retiré : PC")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **PC** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "ps4")||(msg.content === (prefix2 + "PS4"))) {
        if (msg.member.roles.has("466208170428334106")) {
            msg.member.removeRole (PS4)
            msg.reply (":white_check_mark: Rôle retiré : PS4")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **PS4** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "xbox")||(msg.content === (prefix2 + "XBOX"))) {
        if (msg.member.roles.has("466208324241850388")) {
            msg.member.removeRole (XBOX)
            msg.reply (":white_check_mark: Rôle retiré : XBOX")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **XBOX** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "switch")||(msg.content === (prefix2 + "SWITCH"))) {
        if (msg.member.roles.has("461210587188166657")){
            msg.member.removeRole (Switch)
            msg.reply (":white_check_mark: Rôle retiré : Switch")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **Switch** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "tel")||(msg.content === (prefix2 + "téléphone"))||(msg.content === (prefix2 + "telephone"))||(msg.content === (prefix2 + "TELEPHONE"))) {
        if (msg.member.roles.has("466208425508864010")) {  
            msg.member.removeRole (Téléphone)
            msg.reply (":white_check_mark: Rôle retiré : Téléphone")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **Téléphone** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "Vidéo Notif")||(msg.content === (prefix2 + "video notif"))||(msg.content === (prefix2 + "notif video"))||(msg.content === prefix2 + "Notif Vidéo")) {
           if (msg.member.roles.has("466259636815790091")) {
                msg.member.removeRole (NotifVidéo)
                msg.reply (":white_check_mark: Rôle retiré : Notif Vidéo ! Vous ne serez plus notifié lorsque NICOO sortira une vidéo !")
           }
           else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **Notif Vidéo** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "Live Notif")||(msg.content === (prefix2 + "live notif"))||(msg.content === (prefix2 + "notif live"))||msg.content === prefix2 + "Notif Live") {
        if (msg.member.roles.has("466259943473807361")) {
            msg.member.removeRole (NotifLive)
            msg.reply (":white_check_mark: Rôle retiré : Notif Live ! Vous ne serez plus notifié lorsque NICOO commencera un live !")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **Notif Live** alors que tu ne l'as pas")
        }
    };

    if (msg.content === (prefix2 + "Twitter Notif")||(msg.content === (prefix2 + "twitter notif"))||(msg.content === (prefix2 + "Notif Twitter"))||msg.content === prefix2 + "notif twitter"||(msg.content === (prefix))) {
        if (msg.member.roles.has("466259754256302091")) {
            msg.member.removeRole (NotifTwitter)
            msg.reply (":white_check_mark: Rôle retiré : Notif Twitter ! Vous ne serez plus notifié lorsque NICOO postera un nouveau Tweet !")
        }
        else {
            msg.reply(":face_palm: Erreur : Impossible de te retirer le rôle **Notif Twitter** alors que tu ne l'as pas")
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
                },
                {       name: prefix + "serveur test",
                        value: "https://discord.gg/Zj4DbkE <--- Serveur Test du Bot"
                }
            ],
            timestamp: new Date(),
            footer: {
              text: `Bot créé par ${créateurbot} -> Pour NICOO.`
            }
          }  
        });
    };

    if (msg.content === (prefix + "public test")||msg.content === (prefix + "serveur test")) {
        msg.reply (`Lien du discord "Nicoo Commu Public Test" ici : https://discord.gg/Zj4DbkE`)
    }

    const mododiscord = msg.member.roles.find("name", "📕 Modérateur Discord")
    
    if (msg.content.startsWith (prefix + "sondage")){
        if (mododiscord) {
            if (!args[0]) {
                msg.channel.send("Il faut que tu me précise ce que tu veux que je note !")
            }
            else {
                msg.delete()
                msg.channel.send({embed:{
                    fields: [{
                        name: `**__Nouveau sondage !__**`,
                        value: "-----------------------***\n" + args.join(" ") + "***"
                        }],
                        timestamp: new Date(),
                footer: {
                    text: `Date d'envoi :`
            }}});
                msg.channel.send('@everyone')
            };
        }
        else {
            msg.reply(`Tu dois posséder le grade "Modérateur Discord" pour effectuer la commande.`)
        };
    };

    if (msg.content.startsWith (prefix + "suggestion")){
        if (!args[0]) {
            msg.channel.send("Impossible d'envoyer la suggestion ! Il n'y a pas d'arguments après la commande !")
        }
        else {
            msg.guild.channels.find("name", "suggestions-serveur").send({embed:{
                fields: [{
                    name: `**__Nouvelle suggestion !__**`,
                    value: "-----------------------\n" + args.join(" ") + ""
                    }],
                    timestamp: new Date(),
                footer: {
                    text: `Auteur : ${msg.author.toString()}, Date d'envoi :`
            }}});
        };
    };

//Modération

const logs = msg.guild.channels.find("name", "logs")
var raison = "Aucune raison"
function flash(msg, delay = 2000) {
    setTimeout(() => msg.delete(), delay)
}
    if (msg.content === (prefix + "modération")) {
        if (msg.member.roles.find("id", "420320040580022272")) {
            msg.channel.send ({embed:{
                color: 14525541,
                title: "Page de modération !",
                description: ":arrow_down:  **__Commandes de modération__**  :arrow_down:",
                fields: [{
                    
                    name: prefix + "ban",
                    value: "Permet de ban une personne"
                }]
            }})
        }
        else {
            msg.reply (`:x: **Rôle requis : "Modérateur Discord"**`)
        }
    }

if (msg.content.startsWith (prefix + `ban`)) {
    if (mododiscord) {
        if (msg.guild.members.find("id", "466960761747669002").hasPermission("BAN_MEMBERS")) { //467988311172972545
        if (args[0] == firstMentioned) {
            if (msg.guild.member(firstMentioned).bannable) { 
                if (args[1] !== undefined) {
                    delete args[0]
                    raison = args.join(" ")
                }
            msg.guild.member(firstMentioned).ban({days: 7, reason: raison}).then((member) => {          
            msg.channel.send (`${firstMentioned} à été banni.`)}).catch(() => {})
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
            }        
        }
        else {
            msg.reply ("Il faut que tu mentionnes la personne pour que je le ban.")
        }
    }
    else {
        msg.reply("Je n'ai pas la permission : Bannir des membres")
    }
    }
    else {
        msg.reply (`:x: Tu n'as pas le rôle **"Modérateur Discord"**`)
    }
}

if (msg.content.startsWith (prefix + "clear")) {
    if (mododiscord) {
        if (isNaN(args[0])) {
            msg.reply ("Il faut spécifier le nombre de messages à supprimer")
        }
        else {
            let number = parseInt(args[0])
            if (number > 100) {
                msg.reply("Il m'est impossible de supprimer plus de 100 messages.")
            }
            else {
                
                msg.channel.bulkDelete(number).then(messages => {
                    msg.reply(messages.size + " messages ont été supprimés !")
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
                    .addField("Commande efféctué :", "`!clear` " + args.join(" "), false)
                    .addField("Par :", msg.author.toString(), true)
                    .addField("Salon :", msg.channel, true)
                    .addField("Nombre total de messages supprimés :", messages.size, true)
                    .addField("Raison :", raison, true)
                    logs.send(embed4)
                })             
               
            }
        }
    }
    else {
        msg.reply (`:x: Rôle requis : **"Modérateur Discord"**`)
    }
}

});

//Bot développé par @Mathieu#7183

//// Language de programation : JS

const Discord = require ("discord.js");
const bot = new Discord.Client();
const prefix = "!";


//token

bot.login (process.env.BOT_TOKEN);

//Connection et statut de jeu

bot.on("ready", () => {
    bot.user.setActivity ("veiller sur la commu de NICOO ! | !aide")
    console.log (`${bot.user.tag} est prêt !`)
});

bot.on("guildMemberAdd", member => {
    let regles = member.guild.channels.find('id', "335759570775441408") //id channel règlement
    let channel = member.guild.channels.find("id", "414468712754577428") //id channel bienvenue
    channel.send (`:wave: Bienvenue ${member} sur le serveur de NICOO ! :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} !` + "```\n```")
    console.log (`${member} à rejoint le serveur !`)
});

bot.on("message", msg => {

var cont = msg.content.slice(prefix.length).split(" ");
var args = cont.slice(1);

//Test

    if (msg.content === (prefix + "ping")) {
        msg.channel.send(`:ping_pong: Pong : ` + Math.round(bot.ping) + "ms"); 
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
                name: prefix + "ping",
                value: "Cette commande affichera le ping du bot."
            },
            {
              name: prefix + "rôles",
              value: "Cette commande affichera la page d'aide d'attribution et de retrait de rôles"
            },
            {
              name: prefix + "infos",
              value: "Cette commande affichera les informations de NICOO."
            }
            ],
            timestamp: new Date(),
            footer: {
              text: "Bot créé par @Mathieu#7183 -> Pour NICOO. || Page d'aide générale"
            }
          }   
        });
    };

//Afficher l'avatar

if (msg.content === prefix + "avatar") {
        msg.reply (msg.author.avatarURL)
        console.log (`Affichage d'un avatar ${msg.author.id}`)
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
        {
            name: prefix + "ps4",
            value: "Obtenez le grade **PS4** ! (Joueur Fortnite sur PS4)"
        },
        {
            name: prefix + "xbox",
            value: "Obtenez le grade **XBOX** ! (Joueur Fortnite sur XBOX)"
        },
        {
            name: prefix + "switch",
            value: "Obtenez le grade **Switch** ! (Joueur Fortnite sur Switch)"
        },
        {
            name: prefix + "téléphone",
            value: "Obtenez le grade **Téléphone** ! (Joueur Fortnite sur Téléphone)"
        },
        {
            name: prefix + "Notif Vidéo",
            value: "Obtenez le grade **Notif Vidéo** ! (Vous serez notifié lorsque NICOO sortira une Vidéo !) "
        },
        
        {
            name: prefix + "Notif Live",
            value: "Obtenez le grade **Notif Live** ! (Vous serez notifié lorsque NICOO commencera un live !)"
        },

        {
            name: prefix + "Notif Serveurs Privés",
            value: "Obtenez le grade **Notif Serveurs Privés** ! (Vous serez notifié lorsque NICOO organisera des parties/serveurs privés !)"
        },

        {
            name: prefix + "Notif Twitter",
            value: "Obtenez le grade **Notif Twitter** ! (Vous serez notifié lorsque NICOO aura posté un tweet !)"
        },

        ],
        timestamp: new Date(),
        footer: { text: "Bot créé par @Mathieu#7183 -> Pour NICOO. || Page 1 / S'attribuer des rôles" }
      }   
    });
};


    if (msg.content === (prefix + "pc")||(msg.content === (prefix + "PC"))) {
        let PC = msg.guild.roles.find ("id", "466208062298914826")
        msg.member.addRole (PC)
        msg.reply (":white_check_mark: Rôle ajouté : PC, **Bon jeu !**")
};

    if (msg.content === (prefix + "ps4")||(msg.content === (prefix + "PS4"))) {
        let PS4 = msg.guild.roles.find ("id", "466208170428334106")
        msg.member.addRole (PS4)
        msg.reply (":white_check_mark: Rôle ajouté : PS4, **Bon jeu !**")
};

    if (msg.content === (prefix + "xbox")||(msg.content === (prefix + "XBOX"))) {
        let XBOX = msg.guild.roles.find ("id", "466208324241850388")
        msg.member.addRole (XBOX)
        msg.reply (":white_check_mark: Rôle ajouté : XBOX, **Bon jeu !**")
};

    if (msg.content === (prefix + "switch")||(msg.content === (prefix + "SWITCH"))) {
        let Switch = msg.guild.roles.find ("id", "461210587188166657")
        msg.member.addRole (Switch)
        msg.reply (":white_check_mark: Rôle ajouté : Switch, **Bon jeu !**")
};

    if (msg.content === (prefix + "tel")||(msg.content === (prefix + "téléphone"))||(msg.content === (prefix + "telephone"))||(msg.content === (prefix + "TELEPHONE"))) {
        let Téléphone = msg.guild.roles.find ("id", "466208425508864010")
        msg.member.addRole (Téléphone)
        msg.reply (":white_check_mark: Rôle ajouté : Téléphone, **Bon jeu !**")
};

    if (msg.content === (prefix + "Vidéo Notif")||(msg.content === (prefix + "video notif"))||(msg.content === (prefix + "notif video"))||msg.content === prefix + "Notif Vidéo") {
        let NotifVidéo = msg.guild.roles.find ("id", "466259636815790091")
        msg.member.addRole (NotifVidéo)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Vidéo ! Vous serez désormais avertis lorsque NICOO postera une Vidéo !")
};  

    if (msg.content === (prefix + "Live Notif")||(msg.content === (prefix + "live notif"))||(msg.content === (prefix + "notif live"))||msg.content === prefix + "Notif Live") {
        let NotifLive = msg.guild.roles.find ("id", "466259943473807361")
        msg.member.addRole (NotifLive)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Live ! Vous serez désormais avertis lorsque NICOO commencera un live !")
};

    if (msg.content === (prefix + "Serveurs Privés Notif")||(msg.content === (prefix + "serveurs privés notif"))||(msg.content === (prefix + "notif serveurs privé"))||msg.content === prefix + "Notif Serveurs Privés") {
        let NotifServeursPrivés = msg.guild.roles.find ("id", "466259842332491788")
        msg.member.addRole (NotifServeursPrivés)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Serveurs Privés ! Vous serez désormais avertis lorsque NICOO organisera des serveurs privées !")
};

    if (msg.content === (prefix + "Twitter Notif")||(msg.content === (prefix + "twitter notif"))||(msg.content === (prefix + "Notif Twitter"))||msg.content === prefix + "notif twitter") {
        let NotifTwitter = msg.guild.roles.find ("id", "466259754256302091")
        msg.member.addRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Twitter ! Vous serez désormais avertis lorsque NICOO postera un nouveau Tweet !")
};

//Commandes pour retirer des rôles

const prefix2 = "!del "

if (msg.content === (prefix + "roles")||(msg.content === (prefix + "role"))||(msg.content === (prefix + "rôles"))|(msg.content === (prefix + "rôle"))) {
    msg.channel.send ({embed: {
        color: 14525541,
        title: "**Rôles à vous retirer vous même.**",
        description: ":arrow_down:  **En effectuant les commandes ci-dessous, vous allez pouvoir vous retirer des rôles**  :arrow_down:",
        fields: [{
           
            name: prefix2 + "pc",
            value: "Retirez vous le grade **PC** ! (Joueur Fortnite sur PC)"
        },
        {
            name: prefix2 + "ps4",
            value: "Retirez vous le grade **PS4** ! (Joueur Fortnite sur PS4)"
        },
        {
            name: prefix2 + "xbox",
            value: "Retirez vous le grade **XBOX** ! (Joueur Fortnite sur XBOX)"
        },
        {
            name: prefix2 + "switch",
            value: "Retirez vous le grade **Switch** ! (Joueur Fortnite sur Switch)"
        },
        {
            name: prefix2 + "téléphone",
            value: "Retirez vous le grade **Téléphone** ! (Joueur Fortnite sur Téléphone)"
        },
        {
            name: prefix2 + "Notif Vidéo",
            value: "Retirez vous le grade **Notif Vidéo** ! (Vous ne serez plus notifié lorsque NICOO sortira une Vidéo !) "
        },
        
        {
            name: prefix2 + "Notif Live",
            value: "Retirez vous le grade **Notif Live** ! (Vous ne serez plus notifié lorsque NICOO commencera un live !)"
        },

        {
            name: prefix2 + "Notif Serveurs Privés",
            value: "Retirez vous le grade **Notif Serveurs Privés** ! (Vous ne serez plus notifié lorsque NICOO organisera des parties/serveurs privés !)"
        },

        {
            name: prefix2 + "Notif Twitter",
            value: "Retirez vous le grade **Notif Twitter** ! (Vous ne serez plus notifié lorsque NICOO aura posté un tweet !)"
        },

        ],
        timestamp: new Date(),
        footer: { text: "Bot créé par @Mathieu#7183 -> Pour NICOO. || Page 2 / Se retirer des rôles" }
      }   
    });
};


    if (msg.content === (prefix2 + "pc")||(msg.content === (prefix2 + "PC"))) {
        let PC = msg.guild.roles.find ("id", "466208062298914826")
        msg.member.removeRole (PC)
        msg.reply (":white_check_mark: Rôle retiré : PC")
};

    if (msg.content === (prefix2 + "ps4")||(msg.content === (prefix2 + "PS4"))) {
        let PS4 = msg.guild.roles.find ("id", "466208170428334106")
        msg.member.removeRole (PS4)
        msg.reply (":white_check_mark: Rôle retiré : PS4")
};

    if (msg.content === (prefix2 + "xbox")||(msg.content === (prefix2 + "XBOX"))) {
        let XBOX = msg.guild.roles.find ("id", "466208324241850388")
        msg.member.removeRole (XBOX)
        msg.reply (":white_check_mark: Rôle retiré : XBOX")
};

    if (msg.content === (prefix2 + "switch")||(msg.content === (prefix2 + "SWITCH"))) {
        let Switch = msg.guild.roles.find ("id", "461210587188166657")
        msg.member.removeRole (Switch)
        msg.reply (":white_check_mark: Rôle retiré : Switch")
};

    if (msg.content === (prefix2 + "tel")||(msg.content === (prefix2 + "téléphone"))||(msg.content === (prefix2 + "telephone"))||(msg.content === (prefix2 + "TELEPHONE"))) {
        let Téléphone = msg.guild.roles.find ("id", "466208425508864010")
        msg.member.removeRole (Téléphone)
        msg.reply (":white_check_mark: Rôle retiré : Téléphone")
};

    if (msg.content === (prefix2 + "Vidéo Notif")||(msg.content === (prefix2 + "video notif"))||(msg.content === (prefix2 + "notif video"))||(msg.content === prefix2 + "Notif Vidéo")) {
        let NotifVidéo = msg.guild.roles.find ("id", "466259636815790091")
        msg.member.removeRole (NotifVidéo)
        msg.reply (":white_check_mark: Rôle retiré : Notif Vidéo ! Vous ne serez plus avertis lorsque NICOO sortira une vidéo !")
};

    if (msg.content === (prefix2 + "Live Notif")||(msg.content === (prefix2 + "live notif"))||(msg.content === (prefix2 + "notif live"))||msg.content === prefix2 + "Notif Live") {
        let NotifLive = msg.guild.roles.find ("id", "466259943473807361")
        msg.member.removeRole (NotifLive)
        msg.reply (":white_check_mark: Rôle retiré : Notif Live ! Vous ne serez plus avertis lorsque NICOO commencera un live !")
};

    if (msg.content === (prefix2 + "Serveurs Privés Notif")||(msg.content === (prefix2 + "serveurs privés notif"))||(msg.content === (prefix2 + "notif serveurs privé"))||msg.content === prefix2 + "Notif Serveurs Privés") {
        let NotifServeursPrivés = msg.guild.roles.find ("id", "466259842332491788")
        msg.member.removeRole (NotifServeursPrivés)
        msg.reply (":white_check_mark: Rôle retiré : Notif Serveurs Privés ! Vous ne serez plus avertis lorsque NICOO organisera des serveurs privées !")
};

    if (msg.content === (prefix2 + "Twitter Notif")||(msg.content === (prefix2 + "twitter notif"))||(msg.content === (prefix2 + "Notif Twitter"))||msg.content === prefix2 + "notif twitter") {
        let NotifTwitter = msg.guild.roles.find ("id", "466259754256302091")
        msg.member.removeRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle retiré : Notif Twitter ! Vous ne serez plus avertis lorsque NICOO postera un nouveau Tweet !")
};

//infos

    if (msg.content === (prefix + "infos")||(msg.content === (prefix + "info"))) {
        msg.channel.send ({embed: {
            color: 14525541,
            description: ":arrow_down:  **Retrouvez toutes les informations de NICOO ci-dessous**  :arrow_down:",
            fields: [{
                  name: prefix + "Discord",
                  value: "https://discord.gg//nicoo"
                },
                {
                  name: prefix + "Youtube",
                  value: "https://www.youtube.com/channel/UCITUWtKtOrpGuFT-iADXEAQ"
                },
                {
                  name: prefix + "Twitter",
                  value: "https://twitter.com/nicoo_off"
                },
                {
                    name: prefix + "Instagram",
                    value: "https://www.instagram.com/nicoo_off/"
                },
                {
                    name: prefix + "Créateur",
                    value: "Bot développé par Mathieu#7173"
                }
            ],
            timestamp: new Date(),
            footer: {
              text: "Bot créé par @Mathieu#7183 -> Pour NICOO."
            }
          }   
        });
    };
    
    if (msg.content === (prefix + "discord")||(msg.content === (prefix + "Discord"))||(msg.content === (prefix + "discord nicoo"))||(msg.content === (prefix + "discord NICOO"))||(msg.content === (prefix + "Discord Nicoo"))||(msg.content === (prefix + "Discord NICOO"))) {
        msg.reply ("Tu veux le lien du discord ? Le voici : https://discord.gg/nicoo")
       console.log (`Invitation demandé par ${msg.author.id} (https://discord.gg/nicoo)`)
    };
    if (msg.content === (prefix + "youtube")||(msg.content === (prefix + "youtube nicoo"))||(msg.content === (prefix + "youtube Nicoo"))||(msg.content ===(prefix + "youtube NICOO"))||(msg.content === (prefix + "Youtube"))||(msg.content === (prefix + "Youtube Nicoo"))||(msg.content === (prefix + "Youtube NICOO"))||(msg.content === (prefix + "YouTube"))||(msg.content === (prefix + "YOUTUBE"))||(msg.content === (prefix + "Youtube nicoo"))) {
        msg.reply ("La chaîne de NICOO juste ici : https://www.youtube.com/channel/UCITUWtKtOrpGuFT-iADXEAQ")
        console.log (`Lien de la chaine YouTube de NICOO demandée par ${msg.author.id}`)
    };

    if (msg.content === (prefix + "Twitter")||(msg.content === (prefix + "twitter"))||(msg.content === (prefix + "twitter nicoo"))||(msg.content === (prefix + "twitter NICOO"))||(msg.content === (prefix + "twitter NICOO"))) {
        msg.reply ("Lien du Twitter juste ici : https://twitter.com/nicoo_off")
        console.log (`Lien du Twitter de NICOO demandée par ${msg.author.id}`)
    };

    if (msg.content === (prefix + "insta")||(msg.content === (prefix + "Insta"))||(msg.content === (prefix + "Instagram"))||(msg.content === (prefix + "instagram"))||(msg.content === (prefix + "instagram nicoo"))) {
        msg.reply ("Tu n'as pas l'insta de NICOO ? Alors fonce ! https://www.instagram.com/nicoo_off/")
        console.log (`Lien du Instagram de NICOO demandée par ${msg.author.id}`)
    };

    if (msg.content === (prefix + "créateur")||(msg.content === (prefix + "createur"))||(msg.content === (prefix + "Créateur"))||(msg.channel === (prefix + "Createur"))) {
        msg.reply ("**Bot entièrement développé par Mathieu#7183**")
    }

//Fin du code
});

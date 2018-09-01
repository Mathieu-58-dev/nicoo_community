module.exports.run = async (bot, prefix, args, msg, flash, créateurbot) => {
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
}
module.exports.run = async (Discord, bot, prefix, args, msg, créateurbot) => {
    if (msg.member.permissions.has('MANAGE_CHANNELS')) {
        msg.channel.send ({embed:{
            color: 14525541,
            title: "Page de modération !",
            description: ":arrow_down:  **__Commandes de modération__**  :arrow_down:",
            fields: [{    name: prefix + "ban",
                          value: "Permet de ban une personne."
                  },
                  {       name: prefix + "userinfo",
                          value: "Permet d'obtenir des infos sur un membre."
                  },
                  {       name: prefix + "serverinfo",
                          value: "Permet d'obtenir des infos sur le serveur."
                  },
                  {       name: prefix + "roleinfo",
                          value: "Permet d'obtenir des infos sur un rôle."
                  },
                  {       name: prefix + "sondage",
                          value: `Utilisez cette commande pour faire des sondages.`
                  },
                  {       name: prefix + "clear",
                          value: "Permet de clear un nombre spécifique de messages"
                  }
        ],
          timestamp: new Date(),
          footer: { text: `Bot créé par ${créateurbot} -> Pour NICOO.` }
        }})
    }
    else {
        msg.reply (`:x: **Rôle requis : "Modérateur Discord"**`)
    }
}
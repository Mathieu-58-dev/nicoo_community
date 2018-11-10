module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
msg.channel.send ({embed: {
    color: 14525541,
    title: "Rôles à vous attribuer / retirer vous même.",
    description: ":arrow_down:  **En effectuant les commandes ci-dessous, vous allez pouvoir vous attribuer / vous retirer des rôles**  :arrow_down:",
    fields: [{  name: prefix + "Notif Vidéo",
                value: "Obtenez le grade **Notif Vidéo** ! (Vous serez notifié lorsque NICOO sortira une Vidéo !) "
    },
    {           name: prefix + "Notif Live",
                value: "Obtenez le grade **Notif Live** ! (Vous serez notifié lorsque NICOO commencera un live !)"
    },
    {           name: prefix + "Notif Twitter",
                value: "Obtenez le grade **Notif Twitter** ! (Vous serez notifié lorsque NICOO aura posté un tweet !)"
    }],
    timestamp: new Date(),
    footer: { text: `Bot créé par ${créateurbot} -> Pour NICOO.` }
  }
})
}
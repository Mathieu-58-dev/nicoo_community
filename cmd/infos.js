module.exports.run = async (bot, prefix, args, msg, flash, créateurbot) => {
    msg.channel.send ({embed: {
        color: 14525541,
        description: ":arrow_down:  **Retrouvez toutes les informations de NICOO ci-dessous**  :arrow_down:",
        fields: [{
                    name: "Discord :",
                    value: "https://discord.gg/nicoo"
            },
            {       name: "Youtube :",
                    value: "https://www.youtube.com/channel/UCITUWtKtOrpGuFT-iADXEAQ"
            },
            {       name: "Twitter :",
                    value: "https://twitter.com/nicoo_off"
            },
            {       name: "Instagram :",
                    value: "https://www.instagram.com/nicoo_off/"
            },
            {       name: "Twitch :",
                    value: "https://twitch.tv/nicoo_off"
            },
            {       name: "Créateur :",
                    value: `Bot développé par ${créateurbot}`
            }
        ],
        timestamp: new Date(),
        footer: {
          text: `Bot créé par ${créateurbot} -> Pour NICOO.`
        }
      }
    });
}
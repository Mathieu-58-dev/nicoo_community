module.exports.run = async (bot, prefix, args, msg, flash) => {
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
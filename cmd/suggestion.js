module.exports.run = async (Discord, bot, prefix, args, msg, créateurbot) => {
    if (!args[0]) {
        msg.channel.send("Impossible d'envoyer la suggestion ! Il n'y a pas d'arguments après la commande !")
    }
    else {
        msg.delete()
        let suggestionchannel = msg.guild.channels.get("453611739276378123")

        let suggestionembed = new Discord.RichEmbed()
        .setTitle('01FE5E')
        .setTitle('Nouvelle suggestion')
        .addField('Contenu de la suggestion', "***" + args.join(" ") + "***", false)
        .setDescription(`Suggestion envoyé par ${msg.author.toString()}`)

        suggestionchannel.send(suggestionembed).then(async message => {
            await message.react("✅")
            await message.react("🤷")
            await message.react("❌")
        })
        msg.reply(`Suggestion envoyée dans ${suggestionchannel} !`).then(message => {
            message.delete(3000)
        })
    }
};
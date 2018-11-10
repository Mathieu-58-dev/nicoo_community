module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {

let embed = new Discord.RichEmbed()
        .setColor('01FE5E')
        .setTitle('Liens utiles de NICOO')
        .setThumbnail(msg.author.displayAvatarURL)
        .setDescription(`[Discord](https://discord.gg/nicoo)
        [Youtube](https://www.youtube.com/channel/UCITUWtKtOrpGuFT-iADXEAQ)
        [Twitter](https://twitter.com/nicoo_off)
        [Instagram](https://www.instagram.com/nicoo_off/)
        [Twitch](https://twitch.tv/nicoo_off)`)

        msg.channel.send(embed)
}
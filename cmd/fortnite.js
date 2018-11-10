module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
    var pl = ["pc", "psn", "ps", "ps4", "xbox", "xbl"]
    var plateform

    pl.forEach((nam, i) => {
        if (args[0] == nam) {
            plateform = args[0]
        }
    })

    if (args[0] == plateform) {
        plateform = args[0]
        delete args[0]
    } else {
        plateform = 'pc'
    }

    var username = args.join(" ").trim()
    
    if (!username) return msg.reply("Merci d'indiquer votre pseudo");
    
    let data = fortnite.user(username, plateform).then(async data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
    
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let win = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
    
        let ftnstats = new Discord.RichEmbed()
        .setColor("0x18bde2")
        .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
        .setAuthor('Stats Fortnite')
        .setDescription('**Stats générales :**')
        .addField('Parties jouées :', mplayed, true)
        .addField('Nombre de Top 1 :', wins, true)
        .addField('Win rate :', win, true)
        .addField('Nombre de kills :', kills, true)
        .addField('K/d', kd, true)
        msg.channel.send(ftnstats);
    
    //solo stats

    let solo = stats.solo

    if (solo) {

    let kdsolo = solo['kd']
    let matchessolo = solo['matches']
    let killssolo = solo['kills']
    let winssolo = solo['wins']
    let top3solo = solo['top_3']
    let top5solo = solo['top_5']

    let ftnstatssolo = new Discord.RichEmbed()
    .setColor("0x18bde2")
    .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
    .setDescription('**Stats en solo :**')
    .addField('Parties jouées :', matchessolo, true)
    .addField('Nombre de Top 1 :', winssolo, true)
    .addField('Nombre de kills :', killssolo, true)
    .addField('K/d', kdsolo, false)
    .addField('Nombre de Top 3 :', top3solo, true)
    .addField('Nombre de top 5', top5solo, true)
    await msg.channel.send(ftnstatssolo)
    }
    else {
        await msg.channel.send(`Aucune stats en **solo** pour le joueur : **${data.username}**`)
    }
//duo stats
let duo = stats.duo

    if (duo) {        

    let kdduo = duo['kd']
    let matchesduo = duo['matches']
    let killsduo = duo['kills']
    let winsduo = duo['wins']
    let top3duo = duo['top_3']
    let top5duo = duo['top_5']

    let ftnstatsduo = new Discord.RichEmbed()
    .setColor("0x18bde2")
    .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
    .setDescription('**Stats en duo :**')
    .addField('Parties jouées :', matchesduo, true)
    .addField('Nombre de Top 1 :', winsduo, true)
    .addField('Nombre de kills :', killsduo, true)
    .addField('K/d', kdduo, false)
    .addField('Nombre de Top 3 :', top3duo, true)
    .addField('Nombre de top 5', top5duo, true)

    await msg.channel.send(ftnstatsduo)
    }
    else {
        await msg.channel.send(`Aucune stats en **duo** pour le joueur : **${data.username}**`)
    }
//squad stats

    let squad = stats.squad
    
    if (squad) {

    let kdsquad = squad['kd']
    let matchessquad = squad['matches']
    let killssquad = squad['kills']
    let winssquad = squad['wins']
    let top3squad = squad['top_3']
    let top5squad = squad['top_5']

    let ftnstatssquad = new Discord.RichEmbed()
    .setColor("0x18bde2")
    .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
    .setDescription('**Stats en squad :**')
    .addField('Parties jouées :', matchessquad, true)
    .addField('Nombre de Top 1 :', winssquad, true)
    .addField('Nombre de kills :', killssquad, true)
    .addField('K/d', kdsquad, false)
    .addField('Nombre de Top 3 :', top3squad, true)
    .addField('Nombre de top 5', top5squad, true)

    await msg.channel.send(ftnstatssquad)
    }
    else {
        msg.channel.send(`Aucune stats en **squad** pour le joueur : **${data.username}**`)
    }
    }).catch(error => {
        console.log(error);
        msg.channel.send('Personne non trouvée !');
        bot.users.get('329627630863384586').createDM().then(channel => channel.send(`Erreur dans le salon ${msg.channel.toString()},\n\n${error}`))
        return;
    });
    
}
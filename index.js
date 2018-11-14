const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
const Client = require('fortnite');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const config = require('./json/config.json');
const rolesattribution = require('./cmdparse/attribution');
const wordblacklist = require('./cmdparse/blacklistwords');
const prefix = config.prefix;
const créateurbot = config.créateur;
const fortnite = new Client(process.env.STATS_FTN);

fs.readdir("./cmd/", (err, files) => {
    if (err) console.log(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js')
    if (jsfiles.length <= 0) {
        console.log("Aucune commande chargée (Pas de fichier .js dans le dossier)");
        return;
    }

    console.log(`Chargement de ${jsfiles.length} fichiers !`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmd/${f}`);
        console.log(`${i + 1}: ${f} chargé !`);
        bot.commands.set(f, props);
    });
});

function flash(msg, delay = 1500) {
  setTimeout(() => msg.delete(), delay);
};

bot.on("message", async msg => {
    if (msg.author.bot) return;

    if (msg.content.indexOf(prefix) !== 0 || msg.content.trim() == prefix) return false;

    var args = msg.content.slice(prefix.length).trim().split(/ +/g) 

    const command = args.shift().toLowerCase();

    let cmd = bot.commands.get(command + ".js")
    if (cmd) cmd.run(Discord, bot, prefix, args, msg, flash, créateurbot, fortnite)
});

bot.on('message', msg => {
if (msg.author.bot) return;

    let cont = msg.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

rolesattribution.parse(msg)
rolesattribution.parse2(msg)
rolesattribution.parse3(msg)
wordblacklist.parse(msg)
    
    if (msg.channel.type === 'dm') {
        msg.react("❌")
        let embedmp = new Discord.RichEmbed()
        .setColor('01FE5E')
        .setAuthor('Message reçu par MP.', msg.author.displayAvatarURL)
        .addField('Contenu du message :', msg.content, false)
        .addField('Autheur du message :', msg.author.tag, false)
        .addField('Id :', msg.author.id, false)
        .setThumbnail(msg.author.displayAvatarURL)
        bot.users.get("329627630863384586").send(embedmp)
    }
});

bot.on('messageDelete', message => {

    if (message.author.bot || message.author.id === '329627630863384586') return;
    let embed = new Discord.RichEmbed()
    .setColor('01FE5E')
    .setAuthor("Message d'un utilisateur supprimé", message.guild.iconURL)
    .addField('Message supprimé :', message.content.toString(), false)
    .addField('Dans le salon :', message.channel.toString(), false)
    .setDescription(`**Infos sur la personne concernée :** ${message.author.tag} 🆔 : ${message.author.id}`)
    .setThumbnail(message.author.displayAvatarURL)

    bot.channels.get('420321529612730368').send(embed)
});

bot.on('messageUpdate', function(oldmsg, newmsg) {
    if (oldmsg.author.bot || oldmsg.author.id === '329627630863384586') return;

    let embed = new Discord.RichEmbed()
    .setColor('01FE5E')
    .setAuthor('Message édité', oldmsg.author.displayAvatarURL)
    .setDescription(`**Message édité dans le salon **${oldmsg.channel.toString()}\n
    Membre concerné : **${oldmsg.member.user.tag}** 🆔 ${oldmsg.member.user.id}`)
    .addField('Contenu du message avant :', oldmsg.toString(), false)
    .addField('Contenu du message après :', newmsg.toString(), false)

    bot.channels.get('420321529612730368').send(embed)
})

bot.on("guildMemberAdd", member => {
    let logs = member.guild.channels.get("420321529612730368");
    let regles = member.guild.channels.get("335759570775441408"); 
    let channel = member.guild.channels.get("414468712754577428");
    channel.send (`:wave: Bienvenue ${member} sur le serveur de ${member.guild.name} ! :tada: **Membre n°${member.guild.memberCount}** :tada:\n\nAvant de commencer à utiliser le serveur, je t'invite à bien le comprendre en lisant ${regles} !` + "```\n```");
    let bienvenue = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .setColor("0xf4e541")
    .setThumbnail(member.user.displayAvatarURL)
    .setTitle(`Un membre à rejoint le serveur`)
    .setDescription(`Nom : **${member.user.tag}** 🆔 : **${member.user.id}**\n${member.user.toString()}`)
    .setFooter("Date :")
    .setTimestamp(new Date())
    logs.send(bienvenue)
});

bot.on('guildMemberRemove', member => {
    let logsremove = member.guild.channels.get("420321529612730368");
    let remove = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .setColor("0xf4e541")
    .setThumbnail(member.user.displayAvatarURL)
    .setTitle(`Un membre est parti du serveur`)
    .setDescription(`Nom : **${member.user.tag}** 🆔 : **${member.user.id}**`)
    .setFooter("Date :")
    .setTimestamp(new Date())
    logsremove.send(remove)
});

bot.on('error', err => {
        bot.users.get('329627630863384586').send(`Erreur survenue :\n\n${err.message}`)
});

bot.login(process.env.BOT_TOKEN);

bot.on("error", err => {
       if (err) return console.log(err)
       })

bot.on("ready", () => {
    bot.user.setActivity(`Afficher l'aide : ${prefix}aide`, {type: 'STREAMING', url: 'https://twitch.tv/nicoo_off'});
    console.log(`Bot connecté.`);
});

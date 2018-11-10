module.exports.run = async (Discord, bot, prefix, args, msg, flash, créateurbot, fortnite) => {
  if (msg.member.permissions.has('MANAGE_CHANNELS')) {
      if (!args[0]) {
          msg.channel.send("Il faut que tu me précise ce que tu veux que je note !")
      } else {
          msg.delete()

          msg.channel.send({embed:{
              fields: [{
                  name: `**__Nouveau sondage !__**`,
                  value: "-----------------------***\n" + args.join(" ") + "***"
                  }],
                  timestamp: new Date(),
          footer: {
              text: `Date d'envoi :`
      }}})
      .then(async message => {
          await message.react("✅")
          await message.react("❌")
      })
      .catch(console.error)
      
      msg.channel.send('@everyone').then(message => message.delete())
      };
  } else {
    msg.reply(`Tu dois posséder le grade "Modérateur Discord" pour effectuer la commande.`).then(flash)
  };
}
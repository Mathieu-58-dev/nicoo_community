module.exports.run = async (bot, prefix, args, msg, flash) => {
  if (msg.member.permissions.has('MANAGE_CHANNELS')) {
      if (!args[0]) {
          msg.channel.send("Il faut que tu me précise ce que tu veux que je note !")
      } else {
          msg.delete().catch(console.error)

          msg.channel.send({embed:{
              fields: [{
                  name: `**__Nouveau sondage !__**`,
                  value: "-----------------------***\n" + args.join(" ") + "***"
                  }],
                  timestamp: new Date(),
          footer: {
              text: `Date d'envoi :`
      }}})
      .then(message => {
          message.react("✅")
          message.react("❌")
      })
      .catch(console.error)
      
      msg.channel.send('@everyone')
      };
  } else {
    msg.reply(`Tu dois posséder le grade "Modérateur Discord" pour effectuer la commande.`)
  };
}
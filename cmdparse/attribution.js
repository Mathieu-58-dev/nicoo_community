const config = require('../json/config.json');
const prefix = config.prefix;

module.exports = class role {

    static parse (msg) {
      if (this.match(msg)) {
        this.action(msg)
      }
    }
  
    static match(msg) {
      return msg.content === (prefix + "Vidéo Notif")||(msg.content === (prefix + "video notif"))||(msg.content === (prefix + "notif video"))||msg.content === (prefix + "Notif Vidéo")
    }
  
    static action(msg) {
    const NotifVidéo = msg.guild.roles.find("id", "466259636815790091")
      if (!msg.member.roles.has("466259636815790091")){
        msg.member.addRole (NotifVidéo)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Vidéo ! Vous serez désormais notifié lorsque NICOO postera une Vidéo !")
    }
    else {
        msg.member.removeRole (NotifVidéo)
        msg.reply (":white_check_mark: Rôle retiré : Notif Vidéo ! Vous ne serez plus notifié lorsque NICOO sortira une vidéo !")
    }
    }

    static parse2 (msg) {
        if (this.match2(msg)) {
          this.action2(msg)
        }
      }

    static match2(msg) {
      return msg.content === (prefix + "Live Notif")||(msg.content === (prefix + "live notif"))||(msg.content === (prefix + "notif live"))||msg.content === (prefix + "Notif Live")
    }

    static action2(msg) {
      const NotifLive = msg.guild.roles.find("id", "466259943473807361")
      if (!msg.member.roles.has("466259943473807361")){
        msg.member.addRole (NotifLive)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Live ! Vous serez désormais notifié lorsque NICOO commencera un live !")
    }
    else {
        msg.member.removeRole (NotifLive)
        msg.reply (":white_check_mark: Rôle retiré : Notif Live ! Vous ne serez plus notifié lorsque NICOO commencera un live !")
    }
    }

    static parse3 (msg) {
      if (this.match3(msg)) {
        this.action3(msg)
      }
    }

    static match3(msg) {
      return msg.content === (prefix + "Twitter Notif")||(msg.content === (prefix + "twitter notif"))||(msg.content === (prefix + "Notif Twitter"))||msg.content === prefix + "notif twitter"||(msg.content === (prefix + "Notif twitter"))
    }

    static action3(msg) {
      const NotifTwitter = msg.guild.roles.find("id", "466259754256302091")
      if (!msg.member.roles.has("466259754256302091")){
        msg.member.addRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Twitter ! Vous serez désormais notifié lorsque NICOO postera un nouveau Tweet !")
    }
    else {
        msg.member.removeRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle retiré : Notif Twitter ! Vous ne serez plus notifié lorsque NICOO postera un nouveau Tweet !")
    }
    }
  
} 
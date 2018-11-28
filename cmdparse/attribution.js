const config = require('../json/config.json');
const prefix = config.prefix;

module.exports = class role {

    static parse (msg) {
      if (this.match(msg)) {
        this.action(msg)
      }
    }
  
    static match(msg) {
      let cont = msg.content.toLowerCase()
      return cont === prefix + 'notif vidéo' || cont === prefix + 'notif video'
    }
  
    static action(msg) {
    const NotifVidéo = msg.guild.roles.get("466259636815790091")
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
      let cont = msg.content.toLowerCase()
      return cont === prefix + 'notif live'
    }

    static action2(msg) {
      const NotifLive = msg.guild.roles.get("466259943473807361")
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
      let cont = msg.content.toLowerCase()
      return  cont === prefix + 'notif twitter'
    }

    static action3(msg) {
      const NotifTwitter = msg.guild.roles.get("466259754256302091")
      if (!msg.member.roles.has("466259754256302091")){
        msg.member.addRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle ajouté : Notif Twitter ! Vous serez désormais notifié lorsque NICOO postera un nouveau Tweet !")
    }
    else {
        msg.member.removeRole (NotifTwitter)
        msg.reply (":white_check_mark: Rôle retiré : Notif Twitter ! Vous ne serez plus notifié lorsque NICOO postera un nouveau Tweet !")
    }
    }

    static parse4(msg) {
      if (this.match4(msg)) {
        this.action4(msg)
      }
      
    }
    
    static match4(msg) {
        let cont = msg.content.toLowerCase()
        return cont === prefix + 'notif serveur privé' || cont === prefix + 'notif serveur privés' || cont === prefix + 'notif serveurs privés' || cont === prefix + 'notif serveurs privées'
    }

    static action4(msg) {
        const NotifServeursPrivés = msg.guild.roles.get("517342749255794689")
        if (!msg.member.roles.has("517342749255794689")){
          msg.member.addRole(NotifServeursPrivés)
          msg.reply(":white_check_mark: Rôle ajouté : Notif Serveurs Privées ! Vous serez désormais notifié dès lors que des parties privées seront organisées !")
        }
        else {
          msg.member.removeRole(NotifServeursPrivés)
          msg.reply(":white_check_mark: Rôle retiré : Notif Serveurs Privées ! Vous ne serez plus notifié de l'organisation de parties privées !")
        }
    }

}
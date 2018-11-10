const blacklistwords = [
    'ntm', 'fdp', 'tg', 'ta mère la pute', 'pd', 'fils de pute', 'sale chien', 'sale pute', 'pute', 'ta gueule', 'nique tes morts',
    'ta madre', 'enculé', 'encule tes morts', 'encule', 'garage à bite', 'abruti','va te faire mettre', 'nique ta race', 'negre',
    'biatch', 'bitch', 'dick', 'bouffon', 'bougnoul', 'bâtard', 'branleur', 'brise-burnes', 'casse couille', 'chiennasse',
    'chinetoque', 'fils de bâtard', 'ferme ta gueule', 'enfoiré', 'enfant de pute', 'enfant de putain', 'emmerdeur', 'ducon', 'fiotte',
    'garce', 'gouine', 'mange merde', 'salop', 'salope', 'va te faire enculer']
  
module.exports = class wordsblacklist {

    static parse(msg) {
        if (this.match(msg)){
            this.action(msg)
        }
    }

    static match(msg) {
        return blacklistwords.some(word => msg.content.toLowerCase().includes(word))
    }

    static action(msg) {
        if (msg.author.bot) return;
        if (msg.channel.type === 'dm'){
            return;
        }
        else {
        msg.delete()
        msg.channel.send(`:rage: Merci d'utiliser un meilleur langage ! ${msg.author.toString()} :rage:`)
        .then(message => {
            message.delete(1500)
        })
        .catch(console.error)
    
    }
    }
}

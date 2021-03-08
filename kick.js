const Discord = require("discord.js");
const { connect } = require("http2");
const Client = new Discord.Client();
const prefix = "*";
const ytdl = require ("ytdl-core");

Client.on("ready", () => {
    console.log("bot opérationel");
});


Client.on("message" , message => {
        if(message.author.bot) return;
        if(message.channel.type == "dm")return;
        if(message.member.hasPermission)("ADMINISTRATOR")
{
    if(message.content.startsWith(prefix + "ban")){
        let mention = messsage.mentions.members.first();
        if(mention == undefined){
            message.reply("Mention non ou mal mentionné.");
        }            
        else{
            if(mention.bannable){
                mention.ban();
            }
            else{
                message.reply("C'est pas possible sur lui il est invinssible.");
                message.channel.send(mention.displayName + "C'est bon il est ban cheh.");
            }
        }
    }

}
;

module.exports.run = async (bot, message, args) =>{
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: ta pas le droit !!!").then(m => m.delete(7000));
    

    if(!user) return message.channel.send(":x: mentionne un utilisateur valide !").then(m => m.delete(7000));
        let user = message.mentions.members.first();

    if(user.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id != message.guild.ownerID) return message.message.send(":x: non non non c est pas bon").then(m =>m.delete(7000));
    let reason = args.slice(1).join(" ");
    if(!user.kickable) return message.channel.send(":x:  lui tu peux pas le kick");
    user.kick(reason);
}

module.exports.help = {
    name: "kick"
}
        //*chaîne
        if(message.content == prefix + "chaîne"){
            message.channel.send("https://www.youtube.com/channel/UC2_wkPGtF9k8U6dpOAmaaFQ?view_as=subscriber")}
        //*boum
        if(message.content == prefix + "boum"){
            message.channel.send("🧨")}
        //*blabla
        if(message.content == prefix + "blabla"){
            message.channel.send("**" + message.author.username + "**" + ", Veut parler avec une gentille perssone.")
        }
        if(message.content == "salut"){
            message.channel.send("✌Salut comment sa va ?");
        }
        //*Noël
        if(message.content == prefix + "Noël"){
            message.channel.send("C'est bientôt Noël. Les cadeaux le papa Noël. La soirée en famille avec une bonne grosse d'inde. En bref tout cela pour vous dire profité des vacances est de votre famille anssi que de vos cadeaux.En tout cas tout le staff vous souhaite de bonnes vacansses est de bonne fêtes.")}
            //*2021
        if(message.content == prefix + "2021"){
            message.channel.send("Aujourd'hui nous somme le 01 Janvier est le 01 Janvier que sa passe t-il est oui c'est le nouvel an. Allors le staff tien a vous souhaiter une bonne anée 2021 anssi qu'une bonne santé. ")}

    });
        Client.on("message" , message => {
        if(message.content.startsWith(prefix + "p")){
            if(message.member.voice.channel){
                message.member.voice.channel.join().then(connection => {
                    let args = message.content.split(" ");

                    let dispatcher = connection.play(ytdl(args[1], {quality : "highestaudio" }));

                    dispatcher.on("finish",() => {
                        dispatcher.destroy();
                        connection.disconect();
                    })

                    dispatcher.on("error", err => {
                        console.log("Erreur de dispatcher : " + err );
                    })
                }).catch(err => {
                    message.replay("Erreur lors de la connexion : " +err);
                });
            }
            else{
                message.reply("Vous n'êtes pas connecter dans un salon vocal.");
            }
        }
        });

Client.login("ODExMjUxMzM5NjA2MjI5MDUz.YCverw.LkCwzTRzJYe-PgT1vsB4qWl5PII")
  
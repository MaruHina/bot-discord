const Discord = require("./node_modules/discord.js")
// IL BOT
const bot = new Discord.Client()
// QUI SETTI L'ID DEL CANALE DOVE VUOI MANDATO IL MESSAGGIO DI WELCOME AL NUOVO UTENTE


//CREA LISTA UTENTI
const newUsers = new Discord.Collection()
bot.on('ready', ()=>{
    // MODIFICA LA SCRITTA ALL'ENTRATA NEL CANALE
    console.log("Connected as " + bot.user.tag )


});

// TOKEN DEL BOT
bot_secret_token = "NTEzNjg4NTg2ODI3MDcxNDg4.DtRFcw.313HKl94HGfWqYDrlY7OG5DFXpc"

// LOGIN DEL BOT
bot.login(bot_secret_token)

// QUESTO TI SERVE AD AGGIUNGERE UN UTENTE ALLA LISTA-UTENTI
bot.on("guildMemberAdd", member => {
    var welcomeChannel = bot.channels.get("513413822762188811")
    welcomeChannel.send("Welcome " + member + "! Sei uno scarsone, vero? Raggiungi i tuoi amici Noob in Party \:wink:");

})

// QUESTO IMPEDISCE DI MANDARE IN CONFUSIONE IL BOT
bot.on("guildMemberRemove", (member)=> {
    var welcomeChannel = bot.channels.get("513413822762188811")
    welcomeChannel.send("Fuck you " + member + "! Nessuno sentirà la tua mancanza!!! \:rage: \:middle_finger:");
})


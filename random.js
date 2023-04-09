client.on("ready", async () => {

const mesajlarınıyaz = ["g","a","l","a","t","a","s","a","r","a","y"]

setInterval(() => {

const cilginserkan = mesajlarınıyaz[Math.floor(Math.random() * mesajlarınıyaz.length)];

const server = client.guilds.get('SENİN O SUNUCUN VARYA HEH İŞTE ONUN ID')

const gs = server.members.random().id 

server.channels.get('O KANALININ ID YAZ KNK').send({ content:'<@'+gs+'>\n'+cilginserkan})

}, 1000)  //1000 = 1 Saniye

}) 

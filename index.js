const Discord = require("discord.js")

const client = new Discord.Client();

const prefix = "!"

client.on('ready', () => {
  console.log("Hello World")
})


client.on('message', text => {
  console.log("=================================")
  console.log(text.content)
  console.log("Sent By:", text.author.username)
  console.log("In channel:", text.channel.name)
})
client.login('MTgxODM3ODIzNTEzNDYwNzM2.VzoTqw.R8CxJv-RwZFZZVsStp7azsW72So');
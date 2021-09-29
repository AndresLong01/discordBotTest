const Discord = require("discord.js")
require('dotenv').config()

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

  if(!text.content.startsWith(prefix) || text.author.bot) return;

  const argument = text.content.slice(prefix.length).split(" ")
  const command = argument.shift().toLowerCase();
  // console.log(argument)

  if(command === "dang") {
    text.channel.send("<:sadge:759279448074879027>")
  }else if(command === "joinvoice") {
    const voiceChannel = text.member.voice.channel;

    console.log(text.member.voice.channel)
    if(!voiceChannel) {
      return text.reply("Please join a channel to use that command.")
    }
    voiceChannel.join()
  }
})


client.login(process.env.TOKEN);
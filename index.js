const Discord = require("discord.js");
const ytdl = require("ytdl-core");
require('dotenv').config();

const client = new Discord.Client();
const servers = {}

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
  const command = argument[0]

  //Start Of Command Conditional Statements (SOCCS)
  if(command === "dang") {
    // console.log(text.author.username);
    if(text.author.username != "Kuru"){
      text.channel.send("<:sadge:759279448074879027>")
    } else {
      text.channel.send("Made you Look")
    }
  }else if(command === "joinvoice") {
    console.log(argument)
    const voiceChannel = text.member.voice.channel;
    function testplay(connection, text) {
      let server = servers[text.guild.id];
      server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
      server.queue.shift();
      server.dispatcher.on("end", function() {
        if(server.queue[0]){
          testplay(connection, text);
        }else{
          connection.disconnect();
        }
      })
    }

    if(!voiceChannel) {
      return text.reply("Please join a channel to use that command.")
    }

    if(!argument[1]) {
      return text.reply("Please provide a valid youtube link")
    }

    if(!servers[text.guild.id]) servers[text.guild.id] = {
      queue: []
    }

    const server = servers[text.guild.id];

    server.queue.push(argument[1])

    if(!text.guild.voiceConnection) text.member.voice.channel.join().then(connection => {
      testplay(connection, text)
    })
    // voiceChannel.join().then(connection => {
    //   const dispatcher = connection.play('https://www.youtube.com/watch?v=QqRLVFRe9AU')
    //   dispatcher.on("end", resign => {
    //     voiceChannel.leave();
    //   })
    // })
  }
})


client.login(process.env.TOKEN);
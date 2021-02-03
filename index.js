const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

const schedule = require('node-schedule');
const { brotliCompress } = require('zlib');

const config = require('./config.json');

bot.once('ready', () => {
  console.log(`Logged in as Glump!`);
});


const tues = schedule.scheduleJob('20 14 * * 7', function(){
  //id is temp id for testing server
  bot.channels.get('754209706209312798').send("Jake wants @everyone to know that you should sign up for some service events!");
});

const prefix = "!";

bot.on('message', msg => {

  const messageContent = msg.content;

  if (msg.author.bot) return;

  if (messageContent.toLowerCase().includes("game")) {
    //bot.commands.get('loser').execute(msg);
  }
  if (!messageContent.startsWith(prefix)) {
    return;
  } else if (messageContent.startsWith("!glump")) {
    bot.commands.get('glumpPhrase').execute(msg);
  } else if (messageContent.startsWith("!help")) {
    bot.commands.get('glumpList').execute(msg);
  } else if (messageContent.startsWith("!meem")) {
    bot.commands.get('sendMemes').execute(msg);
  } else if (messageContent.startsWith("!fellowship")) {
    bot.commands.get('fellowEvents').execute();
  } else if (messageContent.startsWith("!owo")) {
    bot.commands.get('owoifier').execute(msg);
  } else if (messageContent.startsWith("!donate")){
    bot.commands.get('saveMeem').execute(msg);
  } else {
    if (messageContent.startsWith(prefix)) {
      msg.channel.send("Sorry, I never finished reading school so I'm not sure what that means! For a list of my capabilities, type \`!help\`");
    }
  }

});

bot.login(process.env.token);

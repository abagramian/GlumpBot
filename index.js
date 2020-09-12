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

const config = require('./config.json');

bot.once('ready', () => {
  console.log(`Logged in as Glump!`);
});


const tues = schedule.scheduleJob('20 14 * * 3', function(){
  //id is temp id for testing server
  bot.channels.get('754209706209312798').send("Jake wants @everyone to know that it is Toe Suckin' Tuesday!");
});


bot.on('message', msg => {

  if (msg.author.bot) return;

  if (msg.content.includes("game")) {
    bot.commands.get('loser').execute(msg);

  if (!msg.content.startsWith(prefix)) 
    return;
  } else if (msg.content.startsWith("!glump")) {
    bot.commands.get('glumpPhrase').execute(msg);
  } else if (msg.content.startsWith("!commands")) {
    bot.commands.get('glumpList').execute(msg);
  } else if (msg.content.startsWith("!tuck")) {
    bot.commands.get('sendTuck').execute(msg);
  }
});

bot.login(process.env.token);

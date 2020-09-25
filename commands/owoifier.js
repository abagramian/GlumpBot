const { Channel } = require("discord.js");

module.exports = {
    name: 'owoifier',
    description: 'owoifies the message before command',
    execute(message) {

        message.channel.fetchMessages({ limit: 2 }).then(messages => {
            let pre_owo = messages.last();
            var owoed = pre_owo.toString().replace(/l/g, "w");
            owoed = owoed.replace(/r/g, "w");
            owoed = owoed.replace(/L/g, "W");
            owoed = owoed.replace(/R/g, "W");
          
            if (!pre_owo.author.bot) {
              message.channel.send(owoed);
            }
        })

    }
}
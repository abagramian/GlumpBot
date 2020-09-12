module.exports = {
    name: "glumpList",
    description: "sends a list of commands",
    execute(message) {
        const list = 
        `I can understand the following commands:
         \t **!commands** - for when you forget what I can do!
         \t **!glump** - I'll remind you of my catchphrases!`;
        message.channel.send(list);
    }
}
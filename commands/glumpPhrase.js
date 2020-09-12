module.exports = {
    name: 'glumpPhrase',
    description: "responds with random glump phrase",
    execute(message) {
        const phrases = ['Glump!', 'Glump Glump!', 'Glump smash!'];
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        message.channel.send(`${phrase}`);
    }
}
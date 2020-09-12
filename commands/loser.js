module.exports = {
    name: 'loser',
    description: "makes some poor bastard very angry",
    execute(message) {
        const loser = message.member;
        message.channel.send(`${loser} lost the game`);
    }
}
const { execute } = require("./loser");

module.exports = {
    name: "sendTuck",
    description: "responds with an image of Hamilton Abert",
    execute(message) {
        message.channel.send({file: ["./images/SOUP STORE.jpg"]});
    }
}
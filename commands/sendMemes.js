module.exports = {
    name: "sendMemes",
    description: "responds with a random meme",
    execute(message) {
        var fs = require('fs');
        var files = fs.readdirSync('images/memes');
        /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
        let chosenFile = files[Math.floor(Math.random() * files.length)];
        message.channel.send({
            files: [`images/memes/${chosenFile}`]
        });
    }
}
module.exports = {
    name: "glumpList",
    description: "sends a list of commands",
    execute(message) {
        const list = 
        `I can understand the following commands:
         \`!help\`
         \`!glump\`
         \`!meem\`
         \`!owo\` (works best following another message with lots of owo potential)`;
        message.channel.send(list);
    }
}
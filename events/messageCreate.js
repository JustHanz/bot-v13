require("dotenv").config();
module.exports = {
	name: 'messageCreate',
	execute(message, client) {
	    const prefix= process.env.prefix
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
	},
};
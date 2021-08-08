require("dotenv").config();
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const GUILD_ID = precess.env.guild
		client.application.commands.set([
			{
				name: 'ping',
				description: "Get the bot's ping!"
			}
		], GUILD_ID)
		console.log(`Slash Commands working`);
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
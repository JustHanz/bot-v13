const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'test',
	description: 'test',
	execute(message, args) {
		const button = new MessageButton()
			.setCustomID('primary')
			.setLabel('Press button')
			.setStyle('PRIMARY');
  
      message.channel.send({ content: 'Success',components: [[button]]});
	},
};
const { Client, Util, MessageEmbed,MessageActionRow, MessageButton } = require("discord.js");
const bot = new Client({ intents: ''}); // isi intent yg di perlukan || fill intent that u needs
const PREFIX = `beta/`; //prefix 
let GUILD_ID = ''; //masukkin guild id || your guild id

bot.on('ready', async (message) => {
    console.log(`${bot.user.tag}  online`);
});

bot.on('ready', async () => {

  bot.application.commands.set([
    {
      name: 'ping',
      description: "Get the bot's ping!"
    }
  ], GUILD_ID) 
 await console.log(`Slash Commands working`);
})
bot.on('interaction', (interaction) => {
  if(!interaction.isCommand()) return
  if(interaction.commandName === 'ping') {
    interaction.reply({ content: "Pong!"})
  }
 
})

bot.on("message", async (message) => {
    if (!message.content.startsWith(PREFIX)) return;
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(PREFIX.length);
    if (command === "pong") return message.channel.send(`ping`)
    if (command === 'ping') {
      const button = new MessageButton()
			.setCustomID('primary')
			.setLabel('Press button')
			.setStyle('PRIMARY');
  
      message.channel.send({ content: 'Pong!',components: [[button]]});
    }
});

bot.login(`bot toket`); // masukin bot token  || fill your bot token here
const discord = require("discord.js");
const fs = require("fs");
const cleverbot = require("cleverbot-free");
const botConfig = require("./config.json");
const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.on("ready", async () => {

    console.log(`Username: ${bot.user.username} botUsers: ${bot.users.size} guilds: ${bot.guilds.size} is online en klaar om te gebruiken!`)
    setInterval(async () => {
        const statuslist = [
            `pterodactyl check`,
            'start met  !help',
            'enzonet is de beste',
            `annanas op een pizza mag`,
        ];
        /*console.log(statuslist);*/
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await bot.user.setPresence({
                game: {
                    name: `${statuslist[random]}`,
                    type: 'playing',
                },
                status: 'online',
            });
        }
        catch (error) {
            console.error(error);
        }
        // 15000MS nooit aanpassen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, 15000);

})



bot.on("message", async message => {
    // als bot bericht stuurt stuurt hij m weg oftewel return
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        var info = new discord.RichEmbed()
            .setAuthor(`Je zit in de DM van: ${bot.user.username}`)
            .setDescription("Ik denk dat er iets fout is gegaan! Je kan mij niet gebruiken in DM!")
            .setTimestamp()
            .setColor('#fc0400')
        return message.channel.send(info);
    }
    if (message.channel.type == 'text'){
      cleverbot(message.content).then(response => message.channel.send(response));
    }

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);
var randomXp = Math.floor(Math.random(1) * 15) + 1;

})



bot.login(botConfig.token);
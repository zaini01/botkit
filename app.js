require('dotenv').config()

let Botkit = require('botkit');

let controller = Botkit.teamsbot({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
})

controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, function() {
        console.log("BOTKIT: Webhooks set up!");
    });
});

// controller.hears('hello', 'direct_message,direct_mention', function(bot, message) {
//     bot.reply(message, 'Hi');
// });

// controller.on('direct_mention', function(bot, message) {
//     bot.reply(message, 'You mentioned me and said, "' + message.text + '"');
// });

// controller.on('direct_message', function(bot, message) {
//     bot.reply(message, 'I got your private message. You said, "' + message.text + '"');
// });

controller.hears('.*', 'message', async(bot, message) => {
    await bot.reply(message, 'I heard: ' + '" ' + message.text + ' "' + ' from ' +message.incoming_message.from.name);
});
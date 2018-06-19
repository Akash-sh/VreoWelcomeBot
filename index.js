const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '611698842:AAHea3fR0iMwLFp_9C-z8y153s75h9 sLnMw'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})
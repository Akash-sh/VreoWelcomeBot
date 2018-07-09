const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '611698842:AAHcE4x2vl1v0ygvtLKqnkq1arbsgAhvlkg'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})

const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '611698842:AAHcE4x2vl1v0ygvtLKqnkq1arbsgAhvlkg'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    if (msg.new_chat_members != undefined) {
    bot.sendMessage(message.chat.id, message.new_chat_member.username + " joined!"); }
});

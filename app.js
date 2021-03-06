const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([{ command: "/test", description: "test" }]);

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
    },
  });
});

bot.onText(/\/test/, (msg) => {
  bot.sendMessage(msg.chat.id, "ismet kizgin");
});

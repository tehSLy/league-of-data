import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { game, watch } from "./commands";
import { config } from "./config";
import { cache } from "./utils/cache";
import { parseMessage } from "./utils/commandMiddleware";

const startApp = async () => {
  const bot = new Telegraf(config.BOT_API_KEY);

  await cache.init();
  await registerBot(bot);
};

const registerBot = async (bot: Telegraf<Context<Update>>) => {
  bot.start((ctx) => ctx.reply("Welcome")); //ответ бота на команду /start
  // bot.help((ctx) => ctx.reply("Send me a sticker")); //ответ бота на команду /help
  bot.on("sticker", (ctx) => ctx.reply("woah")); //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
  bot.hears("hi", (ctx) => ctx.reply("Hey there")); // bot.hears это обработчик конкретного текста, данном случае это - "hi"
  bot.on("text", (ctx, next) => {
    console.log("text");

    const command = parseMessage(ctx.message.text);
    if (!command) return;
    const commandHandler = commandRegistry[command.command];
    if (!commandHandler) return ctx.reply("There is no such command");

    const res = commandHandler(ctx, command);
    return res instanceof Promise
      ? res.catch((e) =>
          ctx.reply(
            `Error occured during execution of this command: ${e.message}`
          )
        )
      : res;
  });

  // await bot.telegram.deleteMyCommands();
  // await bot.telegram.setChatMenuButton();

  // bot.telegram.setMyCommands([{command: "game", description: "Foo"}])

  await bot.telegram.setChatMenuButton({
    menuButton: {
      web_app: {
        url: config.WEB_APP_URL,
      },
      text: "Open App",
      type: "web_app",
    },
  });

  bot.on("web_app_data", () => {
    console.log("foo!");
  });

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));

  return bot.launch(); // запуск бота
};

const commandRegistry = {
  watch,
  game,
};

startApp();

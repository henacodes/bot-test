import { Bot, webhookCallback } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Welcome sir"));
bot.on("message:text", (ctx) => ctx.reply("I am not a chat bot sir. STOP it!"));

export default webhookCallback(bot, "http");

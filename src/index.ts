import discord, { GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

import { loadEvents } from "./functions";

dotenv.config();

const bot = new discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildPresences
    ]
});
bot.login(process.env.TOKEN);

loadEvents();

export { bot }
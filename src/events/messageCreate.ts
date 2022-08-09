import { bot } from "..";
import commands from "../commands";

bot.on("messageCreate", (message) => {
    if(message.member?.user.bot) return;
    const prefix = <string>process.env.PREFIX;
    const commandName = message.content.split(" ")[0].replace(prefix, "");
    const params = message.content.split(" ").slice(1);
    const command = commands.find(f => f.data.name == commandName);
    if(!command) return;
    command.executeDefault(message, params);
});
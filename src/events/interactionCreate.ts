import { bot } from "..";
import commands from "../commands";

bot.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return;
    const command = commands.find(f => f.data.name == interaction.commandName);
    if(!command) await interaction.reply("Unfortunately this command is not available.");
    else command.executeSlash(interaction);
});
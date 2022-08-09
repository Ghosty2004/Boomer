import { SlashCommandBuilder } from "discord.js";
import { CommandData } from "../interfaces/CommandData";

export default <CommandData> {
    data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
    executeSlash: (interaction) => {
        interaction.reply("Pong!");
    },
    executeDefault: (message) => {
        message.reply("Pong!");
    }
}
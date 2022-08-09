import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";

export interface CommandData {
    data: SlashCommandBuilder;
    executeSlash: (interaction: CommandInteraction) => Promise<void>|void;
    executeDefault: (message: Message, params: Array<any>) => Promise<void>|void;
}
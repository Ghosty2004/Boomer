import { SlashCommandBuilder } from "discord.js";
import { CommandData } from "../interfaces/CommandData";

export default <CommandData> {
    data: new SlashCommandBuilder().setName("gaycheck").setDescription("Check who is the gay"),
    async executeSlash(interaction) {
        await interaction.deferReply();
        const user = interaction.guild?.members.cache.filter(f => !f.user.bot).random();
        interaction.editReply(`**${user?.user.tag}** is the gay`);
    },
    async executeDefault(message) {
        const user = message.guild?.members.cache.filter(f => !f.user.bot).random();
        message.channel.send(`**${user?.user.tag}** is the gay`);
    }
}
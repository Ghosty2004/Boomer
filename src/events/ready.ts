import { REST, Routes, SlashCommandBuilder, time } from "discord.js";

import { bot } from "..";
import commands from "../commands";

bot.on("ready", async () => {
    console.log(`${bot.user?.username} is ready!`);

    const rest = new REST({version: "10"}).setToken(<string>process.env.TOKEN);

    rest.put(Routes.applicationGuildCommands(<string>bot.user?.id, <string>process.env.GUILD), {
        body: commands.map(m => m.data)
    });

    /**
     * To delete every commands from the test guild
     */
    /*const response = await rest.get(Routes.applicationGuildCommands(<string>bot.user?.id, <string>process.env.GUILD)) as Array<any>;
    response.forEach((command) => {
        rest.delete(Routes.applicationGuildCommand(<string>bot.user?.id, <string>process.env.GUILD, command.id)).then((response) => {
            console.log(response);
        });
    });*/

    /**
     * To delete every commands globally
     */
    /*const response = await rest.get(Routes.applicationCommands(<string>bot.user?.id)) as Array<any>;
    response.forEach((command) => {
        rest.delete(Routes.applicationCommand(<string>bot.user?.id, command.id)).then((response) => {
            console.log(response);
        });
    });*/
});
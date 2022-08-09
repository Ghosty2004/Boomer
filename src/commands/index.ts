import fs from "fs";

import { CommandData } from "../interfaces/CommandData";

const commands: Array<CommandData> = [];

fs.readdirSync(__dirname).filter(f => f.endsWith(".ts") && f != "index.ts").forEach((file) => {
    const command = require(`./${file}`);
    commands.push(command.default);
});

export default commands;
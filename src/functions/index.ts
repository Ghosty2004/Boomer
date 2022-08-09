import fs from "fs";

export function loadEvents() {
    fs.readdirSync(`${__dirname}/../events`).filter(f => f.endsWith(".ts")).forEach((file) => require(`../events/${file}`));
}
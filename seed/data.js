import db from "../db/connection.js";
import Jokes from "../models/Jokes.js";
import jokesData from "./data.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
    await db.dropDatabase();

    await Jokes.create(jokesData);

    console.log(chalk.greenBright("Jokes are created!"));

    await db.close()
};
insertData();

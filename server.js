import db from "./db/connection.js"
import router from "./routers/index.js";
import express from "express";
import logger from "morgan";
import chalk from "chalk";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/api", router);

db.on("connected", () => {
    console.clear();
    console.log(chalk.red("Connected to MongoDB"));

    app.listen(PORT,() => {
        console.log(chalk.magenta(`Express server running on port ${PORT}`))
    })
})
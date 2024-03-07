import mongoose, { Mongoose } from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.01:27017/:project3-api").catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`);
})

mongoose.connection.on("disconnection", () => {
    console.log(chalk.bold("Disconnected from MongoDB!"));
})

mongoose.connection.on("error",(err) => {
    console.log(chalk.bold("Connected from MongoDB"));
})

export default mongoose.connection
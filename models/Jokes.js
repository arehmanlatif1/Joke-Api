import mongoose from "mongoose";
import { Schema } from "mongoose";
// const Schema = new mongoose.Schema;

let jokeSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: ["general", "programming", "dad", "knock-knock", "etc"],
    },
    setup: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: true,
    },
});

export default mongoose.model("jokes", jokeSchema)


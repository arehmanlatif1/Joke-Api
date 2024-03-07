import { request, response } from "express";
import Jokes from "../models/Jokes.js";

export const getJokes = async (request, response) => {
    try{
        const jokes = await Jokes.find();
        response.json(jokes);

    } catch(error){ 
        console.error(error);
        response.status(500).json({ error: error.message });

    }
};

export const getJoke = async (request, response) => {
    try {
        const { id } = request.params;
        const joke = await Jokes.findById(id);

        if (joke) {
            return response.json(joke);
        }
        response.status(404).json({ message: "Joke not found!" })

    } catch(error) {
        console.error(error);
        response.status(500).json({ error: error.message });

    }
};

export const createJoke = async (request, response) => {
    try {
        const joke = new Jokes(request.body);
        await joke.save();

        response.status(201).json(joke);

    } catch(error) {
        console.error(error);
        response.status(500).json({ error: error.message });

    }

};

export const updateJoke = async (request, response) => {
    try {
        const { id } = request.params;
        const joke = await Jokes.findByIdAndUpdate(id, request.body)
        response.status(201).json(joke);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
        
      }
};

export const deleteJoke = async (request, response) => {
    try{
        const { id } = request.params
        const deleted = await Jokes.findByIdAndDelete(id);

        if (deleted) {
            return response.status(200).send("Joke Deleted!");
        }
        throw new Error("Joke not Found!");

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });      
      }
}
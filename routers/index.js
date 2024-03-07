import mongoose from "mongoose";
import { Router, response } from "express";
import jokesRoutes from "./jokes.js";

const router = Router();

router.get("/", (request, response) => response.send("Joke API root!"));

router.use("/jokes", jokesRoutes);

export default router;
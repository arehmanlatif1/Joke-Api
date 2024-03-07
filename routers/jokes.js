import { Router } from "express";
import * as controller from "../controller/jokes.js";

const router = Router();

router.get("/", controller.getJokes);
router.get("/:id", controller.getJoke);
router.post("/", controller.createJoke);
router.put("/:id", controller.updateJoke);
router.delete("/:id", controller.deleteJoke);

export default router;
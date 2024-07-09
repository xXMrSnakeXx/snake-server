import express from "express";

import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { addScore } from "../controllers/score/index.js";



export const scoreRouter = express.Router();

scoreRouter.post("/", ctrlWrapper(addScore));

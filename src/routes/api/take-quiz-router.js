import express from "express";
import { isEmptyBody } from "../../middleware/index.js";
import { ctrlWrapper, isValidBody } from "../../decorators/index.js";
import { takeQuizSchema } from "../../models/TakeQuiz.js";
import addTakeQuiz from "../../controllers/take-quiz-controllers/addTakeQuiz.js";

const takeQuizRouter = express.Router();

takeQuizRouter.post(
  "/",
  isEmptyBody,
  isValidBody(takeQuizSchema),
  ctrlWrapper(addTakeQuiz)
);

export default takeQuizRouter;

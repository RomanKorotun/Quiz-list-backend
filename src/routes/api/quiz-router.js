import express from "express";
import { isEmptyBody, isValidId } from "../../middleware/index.js";
import { ctrlWrapper, isValidBody } from "../../decorators/index.js";
import { adddQuizSchema } from "../../models/Quiz.js";
import {
  addQuiz,
  deleteQuiz,
  getAllQuizzes,
} from "../../controllers/quiz-controllers/index.js";

const quizRouter = express.Router();

quizRouter.post(
  "/",
  isEmptyBody,
  isValidBody(adddQuizSchema),
  ctrlWrapper(addQuiz)
);

quizRouter.get("/", ctrlWrapper(getAllQuizzes));

quizRouter.delete("/:id", isValidId, ctrlWrapper(deleteQuiz));

export default quizRouter;

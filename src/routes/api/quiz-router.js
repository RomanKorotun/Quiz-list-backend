import express from "express";
import { isEmptyBody, isValidId } from "../../middleware/index.js";
import { ctrlWrapper, isValidBody } from "../../decorators/index.js";
import { adddQuizSchema, updateQuizSchema } from "../../models/Quiz.js";
import {
  addQuiz,
  deleteQuiz,
  getAllQuizzes,
  getByIdQuiz,
  updateQuiz,
} from "../../controllers/quiz-controllers/index.js";

const quizRouter = express.Router();

quizRouter.post(
  "/",
  isEmptyBody,
  isValidBody(adddQuizSchema),
  ctrlWrapper(addQuiz)
);

quizRouter.get("/", ctrlWrapper(getAllQuizzes));

quizRouter.get("/:id", isValidId, ctrlWrapper(getByIdQuiz));

quizRouter.delete("/:id", isValidId, ctrlWrapper(deleteQuiz));

quizRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  isValidBody(updateQuizSchema),
  ctrlWrapper(updateQuiz)
);

export default quizRouter;

import { model, Schema } from "mongoose";
import Joi from "joi";

const QuizSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    questions: [
      {
        question: { type: String, required: true },
        type: { type: String, required: true },
        answers: { type: [String], default: [] },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export const adddQuizSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  questions: Joi.array().items(
    Joi.object({
      question: Joi.string().required(),
      type: Joi.string().required(),
      answers: Joi.array().items(Joi.string()).default([]),
    })
  ),
});

const Quiz = model("quiz", QuizSchema);

export default Quiz;

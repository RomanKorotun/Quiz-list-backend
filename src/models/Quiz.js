import { model, Schema } from "mongoose";
import Joi from "joi";
import { handleSaveError, handleUpdateSettings } from "./hooks.js";

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

QuizSchema.post("save", handleSaveError);
QuizSchema.pre("findOneAndUpdate", handleUpdateSettings);
QuizSchema.post("findOneAndUpdate", handleSaveError);

export const adddQuizSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  questions: Joi.array().items(
    Joi.object({
      question: Joi.string().required(),
      type: Joi.string().required(),
      answers: Joi.array().items(Joi.string()).default([]).required(),
    })
  ),
});

export const updateQuizSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  questions: Joi.array().items(
    Joi.object({
      question: Joi.string(),
      type: Joi.string(),
      answers: Joi.array().items(Joi.string()).default([]),
    })
  ),
});

const Quiz = model("quiz", QuizSchema);

export default Quiz;

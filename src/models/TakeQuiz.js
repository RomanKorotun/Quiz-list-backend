import { model, Schema } from "mongoose";
import Joi from "joi";

const TakeQuizSchema = new Schema(
  {
    questions: { type: Schema.Types.Mixed, required: true },
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
  },

  { versionKey: false, timestamps: true }
);

export const takeQuizSchema = Joi.object({
  questions: Joi.object().required(),
  quizId: Joi.string().required(),
});

const TakeQuiz = model("takequiz", TakeQuizSchema);

export default TakeQuiz;

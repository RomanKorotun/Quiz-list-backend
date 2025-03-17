import { HttpError } from "../../helpers/index.js";
import Quiz from "../../models/Quiz.js";

const updateQuiz = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);
  const quiz = await Quiz.findByIdAndUpdate(id, req.body);

  if (!quiz) {
    throw HttpError(404);
  }

  res.json(quiz);
};

export default updateQuiz;

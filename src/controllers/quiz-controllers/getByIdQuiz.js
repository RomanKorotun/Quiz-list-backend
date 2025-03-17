import { HttpError } from "../../helpers/index.js";
import Quiz from "../../models/Quiz.js";

const getByIdQuiz = async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findById(id);

  if (!quiz) {
    throw HttpError(404);
  }

  res.json(quiz);
};

export default getByIdQuiz;

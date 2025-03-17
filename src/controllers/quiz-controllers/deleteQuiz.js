import { HttpError } from "../../helpers/index.js";
import Quiz from "../../models/Quiz.js";

const deleteQuiz = async (req, res) => {
  const { id } = req.params;
  const quiz = await Quiz.findByIdAndDelete(id);

  if (!quiz) {
    throw HttpError(404);
  }

  res.json({
    message: "Quiz deleted successfully",
    _id: quiz._id,
  });
};

export default deleteQuiz;

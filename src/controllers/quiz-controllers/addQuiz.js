import Quiz from "../../models/Quiz.js";

const addQuiz = async (req, res) => {
  const newQuiz = await Quiz.create(req.body);

  res.json(newQuiz);
};

export default addQuiz;

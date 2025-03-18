import TakeQuiz from "../../models/TakeQuiz.js";

const addTakeQuiz = async (req, res) => {
  console.log("hello");
  console.log(req.body);
  const takeQuiz = await TakeQuiz.create(req.body);

  res.json(takeQuiz);
};

export default addTakeQuiz;

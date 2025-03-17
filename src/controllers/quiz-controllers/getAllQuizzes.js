import Quiz from "../../models/Quiz.js";

const getAllQuizzes = async (req, res) => {
  const getAll = await Quiz.aggregate([
    {
      $project: {
        name: 1,
        description: 1,
        questionsCount: { $size: "$questions" },
      },
    },
  ]);

  res.json(getAll);
};

export default getAllQuizzes;

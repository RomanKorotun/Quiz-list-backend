import Quiz from "../../models/Quiz.js";

const getAllQuizzes = async (req, res) => {
  const getAll = await Quiz.aggregate([
    {
      $lookup: {
        from: "takequizzes",
        localField: "_id",
        foreignField: "quizId",
        as: "takequizzes",
      },
    },
    {
      $project: {
        name: 1,
        description: 1,
        questionsCount: { $size: "$questions" },
        count: { $size: "$takequizzes" },
      },
    },
  ]);

  res.json(getAll);
};

export default getAllQuizzes;

import express from "express";
import logger from "morgan";
import cors from "cors";
import quizRouter from "./routes/api/quiz-router.js";

const { NODE_ENV } = process.env;

const app = express();
const formatsLogger = NODE_ENV === "development" ? "dev" : "short";

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

app.use("/api/quizzes", quizRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((error, req, res, nex) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

export default app;

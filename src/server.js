import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config";

const { DB_HOST, PORT = 6060 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(PORT, () => console.log(`Server running on ${PORT} PORT`));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

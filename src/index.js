import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("App is listening on PORT: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("error: ", err);
  });

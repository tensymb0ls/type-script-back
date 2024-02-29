// backend приложение
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const DBURL =
  "mongodb+srv://tensymbols:fXH8hj3ci86W8woQ@cluster0.5z83iq6.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static("static"));
app.use(fileUpload({}));

async function startApp() {
  try {
    await mongoose.connect(DBURL);
    app.listen(5000, () => console.log("Server watching"));
  } catch (e) {
    console.log("error:", e);
  }
}
startApp();

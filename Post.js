import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, requierd: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Post", Post);

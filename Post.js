import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  date: { type: String || nubmer, required: true },
  title: { type: String },
  content: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Post", Post);

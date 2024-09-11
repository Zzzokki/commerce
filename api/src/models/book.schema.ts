import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  authors: {
    type: [Schema.Types.ObjectId],
    ref: "Author",
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const bookModel = model("Book", bookSchema);

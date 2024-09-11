import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: [
    {
      type: {
        city: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
  ],
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

export const authorModel = model("Author", authorSchema);

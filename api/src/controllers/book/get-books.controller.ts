import { RequestHandler } from "express";
import { bookModel } from "../../models";

export const getBooksController: RequestHandler = async (req, res) => {
  try {
    const books = await bookModel.find({}).populate("authors");

    return res.status(200).json({
      books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

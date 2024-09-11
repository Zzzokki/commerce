import { RequestHandler } from "express";
import { bookModel } from "../../models";

export const getBookByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookModel.findById(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json({
      book,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

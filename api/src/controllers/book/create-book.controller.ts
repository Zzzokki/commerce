import { RequestHandler } from "express";
import { bookModel } from "../../models";

export const createBookController: RequestHandler = async (req, res) => {
  try {
    const { name, authors } = req.body;

    await bookModel.create({
      name,
      authors,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: "Book created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

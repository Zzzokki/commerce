import { RequestHandler } from "express";
import { authorModel } from "../../models";

export const getAuthorsController: RequestHandler = async (req, res) => {
  try {
    const authors = await authorModel.find({});

    return res.status(200).json({
      authors,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

import { RequestHandler } from "express";
import { authorModel } from "../../models";

export const getAuthorByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await authorModel.findById(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    return res.status(200).json({
      author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

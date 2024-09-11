import { RequestHandler } from "express";
import { authorModel } from "../../models";

export const createAuthorController: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;

    await authorModel.create({
      name,
    });

    return res.status(201).json({
      message: "Author created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

import { Router } from "express";
import {
  getBookByIdController,
  getBooksController,
  createBookController,
} from "../controllers";

const bookRouter = Router();

bookRouter
  .post("/", createBookController)
  .get("/", getBooksController)
  .get("/:id", getBookByIdController);

export { bookRouter };

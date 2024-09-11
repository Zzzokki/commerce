import { Router } from "express";
import {
  getAuthorsController,
  createAuthorController,
  getAuthorByIdController,
} from "../controllers";

const authorRouter = Router();

authorRouter
  .post("/", createAuthorController)
  .get("/", getAuthorsController)
  .get("/:id", getAuthorByIdController);

export { authorRouter };

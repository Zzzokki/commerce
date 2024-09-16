import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { authorRouter, bookRouter } from "./routes";
import Multer, { memoryStorage } from "multer";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/author", authorRouter);
app.use("/book", bookRouter);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();

const upload = Multer({
  storage,
});

async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return res;
}

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

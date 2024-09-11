import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://admin:78f3vmgtESpl2SQc@cluster0.pqsj91j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("Connected to database");
};

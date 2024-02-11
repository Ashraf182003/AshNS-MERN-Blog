import express from "express";
import mongoose from "mongoose";
import "dotenv/config"

const app = express();
const port = 3000;



app.listen(port, () => {
  console.log("Server is connected on port:" + port);
  
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB.....");
    })
    .catch((err) => console.log(err.message));
});


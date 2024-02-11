import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"
import "dotenv/config"

const app = express();
const port = 3000;

app.use("/api/user", userRoutes);



app.listen(port, () => {
  console.log("Server is connected on port:" + port);
  
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB.....");
    })
    .catch((err) => console.log(err.message));
});


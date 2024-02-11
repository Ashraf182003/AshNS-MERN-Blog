import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import "dotenv/config"

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);



app.listen(port, () => {
  console.log("Server is connected on port:" + port);
  
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB.....");
    })
    .catch((err) => console.log(err.message));
});


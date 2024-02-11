import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import "dotenv/config"

const app = express();
app.use(express.json());
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


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next)=>{   // this midleware will take all req from frontend {app.use()} and catch any error that is thrown in the application
    const statusCode =err.statusCode || 500
    const message = err.message||'Internal Server Error';
    res.status(statusCode).json({
        success : false ,
        statusCode,
        message
    })
})


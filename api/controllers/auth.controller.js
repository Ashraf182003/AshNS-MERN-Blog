import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    (!username || !email || !password )
  ) {return res.json("Please fill all fields")}
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });
  try { await newUser.save();
    res.json("Signup successfull");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

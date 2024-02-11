import mongoose from "mongoose"
export const test = (req, res) => {
    res.json({message: "Api is working"})
    console.log("test is working")

}
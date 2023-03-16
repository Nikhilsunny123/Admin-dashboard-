import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

//using the models
// app.use("/auth", userRouter);
// app.use("/recipes", recipeRouter);

mongoose.connect(
  "mongodb+srv://nikhilsunny35:admin1234@cluster0.rsqv6me.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server started"));

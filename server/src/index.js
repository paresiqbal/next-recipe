import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "../routes/users.js";
import { recipesRouter } from "../routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://pares:paresthejs01@next-recipe.2v2ygbc.mongodb.net/next-recipe?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server running port 3001"));

import express, { NextFunction, Request, Response } from "express";
import usersRoute from "./routes/users";

const app = express();

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

app.use(usersRoute)
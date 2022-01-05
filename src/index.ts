import express from "express";
import basicauth from "./middlewares/basic.auth";
import errorHandler from "./middlewares/error.handler";
import authRoute from "./routes/auth";
import statusRoute from "./routes/status";
import usersRoute from "./routes/users";

const app = express();

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(basicauth)
app.use(usersRoute)
app.use(statusRoute)
app.use(authRoute)

app.use(errorHandler)
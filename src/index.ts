import express from "express";
import statusRoute from "./routes/status";
import usersRoute from "./routes/users";

const app = express();

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(usersRoute)
app.use(statusRoute)
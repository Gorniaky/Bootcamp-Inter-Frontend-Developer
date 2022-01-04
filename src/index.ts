import express, { NextFunction, Request, Response } from "express";

const app = express();

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'bar' });
});
import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from 'jsonwebtoken';
import basicauth from "../middlewares/basic.auth";
import bearerauth from "../middlewares/bearer.auth";
import ForbiddenError from "../models/errors/forbidden.error";

const authRoute = Router();

authRoute.post('/token', basicauth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req;

    if (!user)
      throw new ForbiddenError('Usuário ou senha inválidos.');

    const jwt = JWT.sign({ username: user.username }, 'secret_key', { subject: user?.uuid })

    res.status(StatusCodes.OK).json({ token: jwt })
  } catch (error) {
    next(error);
  }
})

authRoute.post('/token/validate', bearerauth, async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
})

export default authRoute;
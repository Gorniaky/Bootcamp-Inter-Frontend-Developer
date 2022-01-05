import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from 'jsonwebtoken';
import ForbiddenError from "../models/errors/forbidden.error";
import UserRepo from '../repositories/user';

const authRoute = Router();

authRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      throw new ForbiddenError('Credenciais não preenchidas.');

    const [auth_type, token] = authorization.split(' ');

    if (auth_type !== 'Basic' || !token)
      throw new ForbiddenError('Tipo de autenticação inválido.');

    const tokenContent = Buffer.from(token, 'base64').toString('utf8');

    const [username, password] = tokenContent.split(':');

    if (!username || !password)
      throw new ForbiddenError('Credenciais não preenchidas.');

    const user = await UserRepo.findByUsernameAndPassword(username, password);

    if (!user)
      throw new ForbiddenError('Usuário ou senha inválidos.');

    const jwt = JWT.sign({ username: user.username }, 'secret_key', { subject: user?.uuid })

    res.status(StatusCodes.OK).json({ token: jwt })
  } catch (error) {
    next(error);
  }
})

export default authRoute;
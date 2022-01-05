import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error";
import UserRepo from '../repositories/user';

export default async function basicauth(req: Request, res: Response, next: NextFunction) {
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

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}
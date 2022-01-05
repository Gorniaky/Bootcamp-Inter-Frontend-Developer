import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken';
import ForbiddenError from "../models/errors/forbidden.error";

export default async function bearerauth(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      throw new ForbiddenError('Credenciais não preenchidas.');

    const [auth_type, token] = authorization.split(' ');

    if (auth_type !== 'Bearer' || !token)
      throw new ForbiddenError('Tipo de autenticação inválido.');

    const tokenPayload = JWT.verify(token, 'secret_key');

    if (typeof tokenPayload !== 'object' || !tokenPayload.sub)
      throw new ForbiddenError('Credenciais inválidas.');

    req.user = { uuid: tokenPayload.sub };

    next();
  } catch (error) {
    next(error);
  }
}
import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error";

const authRoute = Router();

authRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      throw new ForbiddenError('Credenciais não informadas.');

    const [auth_type, token] = authorization.split(' ');

    if (auth_type !== 'Basic' || !token)
      throw new ForbiddenError('Tipo de autenticação inválido.')

  } catch (error) {
    next(error);
  }
})

export default authRoute;
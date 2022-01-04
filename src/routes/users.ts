/*
 * get /users
 * get /users/:uuid
 * post /users
 * put /users/:uuid
 * delete /users/:uuid
 */

import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import UserRepo from '../repositories/user'

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await UserRepo.findAllUsers();
  res.status(StatusCodes.OK).send({ users })
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const { uuid } = req.params;
  res.status(StatusCodes.OK).send({ uuid })
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const { uuid } = req.params;
  const newUser = req.body;
  newUser.uuid = uuid;
  res.status(StatusCodes.OK).send(newUser);
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK)
})

export default usersRoute;
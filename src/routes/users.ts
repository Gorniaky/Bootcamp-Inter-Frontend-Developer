/*
 * get /users
 * get /users/:uuid
 * post /users
 * put /users/:uuid
 * delete /users/:uuid
 */

import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import bearerauth from "../middlewares/bearer.auth";
import UserRepo from '../repositories/user';

const usersRoute = Router();

usersRoute.get('/users', bearerauth, async (req: Request, res: Response, next: NextFunction) => {
  const users = await UserRepo.findAllUsers();
  res.status(StatusCodes.OK).send(users)
})

usersRoute.get('/users/:uuid', bearerauth, async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  try {
    const { uuid } = req.params;
    const user = await UserRepo.findById(uuid);
    res.status(StatusCodes.OK).send(user)
  } catch (error) {
    next(error)
  }
})

usersRoute.post('/users', bearerauth, async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const uuid = await UserRepo.create(newUser);
  res.status(StatusCodes.OK).send({ uuid });
})

usersRoute.put('/users/:uuid', bearerauth, async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const { uuid } = req.params;
  const newUser = req.body;
  newUser.uuid = uuid;

  await UserRepo.update(newUser);
  res.status(StatusCodes.OK).send(newUser);
})

usersRoute.delete('/users/:uuid', bearerauth, async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const { uuid } = req.params;
  await UserRepo.deleteById(uuid)
  res.sendStatus(StatusCodes.OK)
})

export default usersRoute;
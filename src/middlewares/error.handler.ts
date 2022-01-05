import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error";
import ForbiddenError from "../models/errors/forbidden.error";

export default function errorHandler(error:any,req: Request, res: Response, next: NextFunction) {
  if (error instanceof DatabaseError) {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  if (error instanceof ForbiddenError) {
    return res.sendStatus(StatusCodes.FORBIDDEN);
  }

  res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
}
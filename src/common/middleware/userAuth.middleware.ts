import { Request, Response, NextFunction } from 'express';

export function userAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('token');
  if (token !== '&TGEUDJH#*38fn') {
    return res.status(400).jsonp({ status: 400, message: 'Auth failed!!' });
  }
  next();
}

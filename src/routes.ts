import { Application } from 'express';
import examplesRouter from './api/examples/router'
import usersRouter from './api/users/router'

export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', usersRouter);
};

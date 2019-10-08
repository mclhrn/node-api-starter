import { Application } from 'express';
import examplesRouter from './api/examples/router'
import usersRouter from './api/users/router'

export default function routes(app: Application): void {
  app.use(`${process.env.OPENAPI_PATH_VERSION}examples`, examplesRouter);
  app.use(`${process.env.OPENAPI_PATH_VERSION}users`, usersRouter);
}

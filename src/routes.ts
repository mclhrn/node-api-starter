// eslint-disable-next-line no-unused-vars
import { Application } from 'express'
import usersRouter from './api/users/router'

export default function routes(app: Application): void {
  app.use(`${process.env.OPENAPI_PATH_VERSION}/users`, usersRouter)
}

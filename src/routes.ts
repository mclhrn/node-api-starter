// eslint-disable-next-line no-unused-vars
import { Application } from 'express'
import imagesRouter from './api/router'

export default function routes(app: Application): void {
  app.use(`${process.env.OPENAPI_PATH_VERSION || '/api/v1'}/images`, imagesRouter)
}

import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import os from 'os'
import cookieParser from 'cookie-parser'
import connect from './connect'
import setupSwagger from './openapi'
import { l } from './logger'

const app = express()
export default class ExpressServer {
  constructor() {
    app.use(require('express-pino-logger')({ logger: l }))
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }))
    app.use(cookieParser(process.env.SESSION_SECRET))
  }

  connectDb(db: string): ExpressServer {
    connect({ db })
    return this
  }

  router(routes: (app: express.Application) => void): ExpressServer {
    setupSwagger(app)
    routes(app)
    return this
  }

  listen(p: string | number = process.env.PORT): express.Application {
    const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}}`)
    http.createServer(app).listen(p, welcome(p))
    return app
  }
}

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import connect from './connect';
import installValidator from './openapi';
import { l } from './logger';

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(path.join(__dirname, '/../..'));
    app.set('appPath', root + 'client');
    app.use(require('express-pino-logger')({ logger: l }));
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));

    const db = process.env.MONGO_CONN_STRING;
    connect({ db });
  }

  router(routes: (app: express.Application) => void): ExpressServer {
    installValidator(app, routes);
    return this;
  }

  listen(p: string | number = process.env.PORT): express.Application {
    const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}}`);
    http.createServer(app).listen(p, welcome(p));
    return app;
  }
}

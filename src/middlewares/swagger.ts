import path from 'path';
import middleware, {SwaggerObject} from 'swagger-express-middleware';
import errorHandler from '../middlewares/error.handler';

declare module "express" {
  interface Request {
    swagger: SwaggerObject['basePath'];
    requestId: string;
  }
}

// eslint-disable-next-line no-unused-vars
import {Application, RequestHandler} from 'express';

export default function(app: Application, routes: (app: Application) => void) {
  middleware(path.join(__dirname, 'api.yml'), app, (err, middleware) => {
    if (err) console.log(err);

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(middleware.metadata());
    app.use(middleware.files(app, {
      apiPath: process.env.OPENAPI_SPEC
    }));

    app.use(middleware.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(middleware.CORS(), middleware.validateRequest());

    app.use(errorHandler);

    routes(app);
  });
}

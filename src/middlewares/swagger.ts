// eslint-disable-next-line no-unused-vars
import { Application, RequestHandler } from 'express';
import path from 'path';
import errorHandler from '../middlewares/error.handler';

const createMiddleware = require('@apidevtools/swagger-express-middleware');

export default function(app: Application, routes: (app: Application) => void) {
  createMiddleware(path.join(__dirname, 'api.yml'), app, (err, middleware) => {
    if (err) console.log(err);

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(
      middleware.metadata(),
      middleware.files(),
      middleware.parseRequest(),
      middleware.CORS(),
      middleware.validateRequest()
    );

    app.use(errorHandler);

    routes(app);
  });
}

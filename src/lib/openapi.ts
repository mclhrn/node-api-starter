import path from 'path';
import express from 'express';
import { OpenApiValidator } from 'express-openapi-validator';
import errorHandler from '../middlewares/error.handler';
import { serve, setup } from 'swagger-ui-express'

export default function openapi(app, routes) {
  const apiSpec = path.join(__dirname, 'api.yml');
  app.use(`${process.env.OPENAPI_PATH_VERSION}/api-docs`, express.static(apiSpec));
  new OpenApiValidator({ apiSpec }).install(app);


  console.log('**********')
  console.log(apiSpec)

  // app.use(`${process.env.OPENAPI_PATH_VERSION}/api-docs`, serve, setup(apiSpec));

  routes(app);

  app.use(errorHandler);
}

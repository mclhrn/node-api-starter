import path from 'path'
import errorHandler from '../middlewares/error.handler'
import { serve, setup } from 'swagger-ui-express'
import * as YAML from 'yamljs'

export default function openapi(app) {
  const swaggerDocument = YAML.load(path.join(__dirname, 'api.yaml'))
  app.use(`${process.env.OPENAPI_PATH_VERSION}/api-docs`, serve, setup(swaggerDocument))
  app.use(errorHandler)
}

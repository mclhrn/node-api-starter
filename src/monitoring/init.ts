// eslint-disable-next-line no-unused-vars
import { Express } from 'express'
import { requestWatch, reset } from './mw'
import promClient = require('prom-client')

const pkg = require('../../package.json')

export function init(app: Express) {
  promClient.register.setDefaultLabels({
    fes: pkg.name,
    version: pkg.version
  })

  promClient.collectDefaultMetrics({ timeout: 30000 })

  app.get('/metrics', (req, res) => {
    res.end(promClient.register.metrics())
    reset()
  })

  app.use(requestWatch)
}

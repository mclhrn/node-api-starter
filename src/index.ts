import './lib/env'
import Server from './lib/server'
import routes from './routes'

export default new Server()
  .router(routes)
  .listen(process.env.PORT || 8080)

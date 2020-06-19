import './lib/env'
import Server from './lib/server'
import routes from './routes'

export default new Server()
  .router(routes)
  .connectDb(process.env.MONGO_CONN_STRING)
  .listen(process.env.PORT)

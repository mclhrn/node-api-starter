import './lib/env'
import Server from './lib/server'
import routes from './routes'

const port = parseInt(process.env.PORT)
export default new Server()
  .router(routes)
  .connectDb(process.env.MONGO_CONN_STRING)
  .listen(port)

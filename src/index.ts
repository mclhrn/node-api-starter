import './lib/env';
import Server from './lib/server';
import routes from './lib/routes';

const port = parseInt(process.env.PORT);
export default new Server()
  .router(routes)
  .listen(port);

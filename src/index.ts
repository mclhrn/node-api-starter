import './lib/env';
import Server from './lib/server';
import routes from './routes';

const port = parseInt(process.env.PORT);
export default new Server()
  .router(routes)
  .listen(port);


// TODO - Add prometheus monitoring
// TODO - Add mongo tests
// TODO - Add openshift configs (envs)
// TODO - Add pipeline scripts
// TODO - Add sonarqube

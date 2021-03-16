import server from './app';
import { port, dbUserName } from './config'

server.listen(port);
server.get('/', (req, res) => res.json({ username: dbUserName }))
// eslint-disable-next-line no-console
console.log(`Server started in http://localhost:${port}/`);
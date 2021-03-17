import server from './app';
import { port, dbUserName } from './config'

server.listen(port);
console.log(`Server started in http://localhost:${port}/`);
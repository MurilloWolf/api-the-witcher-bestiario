import server from './app';

const port = process.env.PORT || 3333;

server.listen(port);
// eslint-disable-next-line no-console
console.log('Server started in http://localhost:3333/');

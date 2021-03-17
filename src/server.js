import server from './app';

server.listen(process.env.PORT);
console.log(`Server started in http://localhost:${process.env.PORT}/`);
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './public' });

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
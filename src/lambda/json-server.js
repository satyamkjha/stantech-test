const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/.netlify/functions/json-server', router);

server.listen(9000, () => {
	console.log('JSON Server is running');
});

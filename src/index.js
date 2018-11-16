import http, {createServer} from 'http';
import app from './server';

const server= createServer(app);
let currentApp= app;
const PORT= 4000;

server.listen(PORT, () => {
	console.log(`App running on port: ${PORT}`);
});

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	});
}
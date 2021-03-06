import { TNEMAServer } from 'tnema';
import * as apiMain from './lib/apiMain';
/************************************************************/
let env: string;
env = 'dev';
// env = 'prod';

console.log('Creating server enviroment...');

const server = new TNEMAServer('mtg', './sessions/mtg.json');
server.Port = 3000;
server.MongoSource = 'mongodb://127.0.0.1/mtg';
// allow headers
server.HttpServer.App.use( require('./lib/helpers/header').allowHeader );
// add model
const model = require('./lib/modelAuth');
server.AuthServer.OverwriteOptions(model.authOptions);
server.AuthServer.OverwriteSchemas(model.authModel);
// start TCG engine
// require('./lib/apiMain').create(server);
apiMain.create(server);
// add static route
if (env !== 'dev') {
    // Add Static Route
    server.HttpServer.RouteStatic(__dirname + '/../dist');
    // Catch all other routes and return the index file
    server.HttpServer.App.get('*', (req, res) => {
        res.sendFile(__dirname, '/../dist/index.html');
    });
}

/************************************************************/
export function StartServer(cb?: Function) {
    // Start Server
    server.Create(function(){
        if (cb) {
            cb();
        }
    });
}
/************************************************************/
export function StopServer(cb?: Function) {
    // Stop Server
    server.Destroy(function(){
        if (cb) {
            cb();
        }
    });
}
/************************************************************/

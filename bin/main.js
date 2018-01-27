"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tnema_1 = require("tnema");
/************************************************************/
var env;
env = 'dev';
// env = 'prod';
console.log('Creating server enviroment...');
var server = new tnema_1.TNEMAServer('mtg', './sessions/mtg.json');
server.Port = 3000;
server.MongoSource = 'mongodb://127.0.0.1/mtg';
// allow headers
server.HttpServer.App.use(require('./lib/header').allowHeader);
// add model
var model = require('./lib/modelAuth');
server.AuthServer.OverwriteOptions(model.authOptions);
server.AuthServer.OverwriteSchemas(model.authModel);
// start TCG engine
require('./lib/tcg').create(server);
// add static route
if (env !== 'dev') {
    // Add Static Route
    server.HttpServer.RouteStatic(__dirname + '/../dist');
    // Catch all other routes and return the index file
    server.HttpServer.App.get('*', function (req, res) {
        res.sendFile(__dirname, '/../dist/index.html');
    });
}
/************************************************************/
function StartServer(cb) {
    // Start Server
    server.Create(function () {
        if (cb) {
            cb();
        }
    });
}
exports.StartServer = StartServer;
/************************************************************/
function StopServer(cb) {
    // Stop Server
    server.Destroy(function () {
        if (cb) {
            cb();
        }
    });
}
exports.StopServer = StopServer;
/************************************************************/

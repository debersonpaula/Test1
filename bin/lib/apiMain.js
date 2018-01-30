"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Create Instance of API Server */
function create(server) {
    // initializes model database
    var models = require('./api/model');
    models.forEach(function (value) {
        server.MongoServer.AddModel(value);
    });
    // initialize api
    require('./api').create(server);
}
exports.create = create;

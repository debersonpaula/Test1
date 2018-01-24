"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(server) {
    // initializes model database
    var models = require('./tcg/model');
    models.forEach(function (value) {
        server.MongoServer.AddModel(value);
    });
    // initialize api
    require('./tcg/api').create(server);
}
exports.create = create;

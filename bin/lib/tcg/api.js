"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(server) {
    var edition = server.HttpServer.Router('/api/edition');
    var model = server.MongoServer.SearchModel('lib_editions');
    edition.get('/', server.AuthServer.AuthRoute, function (req, res) {
        model.find({}, function (result) {
            sendjson(res, 200, result);
        });
    });
    edition.get('/:id', server.AuthServer.AuthRoute, function (req, res) {
        model.find({ _id: req.params.id }, function (result) {
            sendjson(res, 200, result);
        });
    });
    edition.put('/', server.AuthServer.AuthRoute, function (req, res) {
        model.updateById(req.body, req.body._id, function (result) {
            sendjson(res, 200, [result]);
        });
    });
}
exports.create = create;
// ===================================================
// === general methods ===============================
// ===================================================
function sendjson(res, status, msg) {
    res.status(status).json({
        messages: msg,
        status: status
    });
}
// ===================================================
// ===================================================

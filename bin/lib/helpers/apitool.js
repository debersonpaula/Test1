"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
/** Authenticated API */
var TAuthAPI = (function () {
    /** create authenticated route */
    function TAuthAPI(server, document, url) {
        this._server = server;
        this._router = server.HttpServer.Router(url);
        this._model = server.MongoServer.SearchModel(document);
        this.defineRouteAll();
        this.defineRouteOne();
        this.defineRoutePost();
        this.defineRoutePut();
        this.defineRouteDelete();
    }
    TAuthAPI.prototype.defineRouteAll = function () {
        var _this = this;
        this._router.get('/', this._server.AuthServer.AuthRoute, function (req, res) {
            _this._model.find({}, function (result, error) { return utils.sendjson2(res, result, error); });
        });
    };
    TAuthAPI.prototype.defineRouteOne = function () {
        var _this = this;
        this._router.get('/:id', this._server.AuthServer.AuthRoute, function (req, res) {
            _this._model.find({ _id: req.params.id }, function (result, error) { return utils.sendjson2(res, result, error); });
        });
    };
    TAuthAPI.prototype.defineRoutePost = function () {
        var _this = this;
        this._router.post('/', this._server.AuthServer.AuthRoute, function (req, res) {
            _this._model.insert(req.body, function (result, error) { return utils.sendjson2(res, result, error); });
        });
    };
    TAuthAPI.prototype.defineRoutePut = function () {
        var _this = this;
        this._router.put('/', this._server.AuthServer.AuthRoute, function (req, res) {
            if (req.body._id) {
                _this._model.updateById(req.body, req.body._id, function (result, error) { return utils.sendjson2(res, result, error); });
            }
            else {
                utils.sendjson(res, 400, ['Invalid Request - Id = null']);
            }
        });
    };
    TAuthAPI.prototype.defineRouteDelete = function () {
        var _this = this;
        this._router.delete('/:_id', this._server.AuthServer.AuthRoute, function (req, res) {
            if (req.params._id) {
                _this._model.delete({ _id: req.params._id });
                utils.sendjson(res, 200, [true]);
            }
            else {
                utils.sendjson(res, 400, ['Invalid Request - Id = null']);
            }
        });
    };
    return TAuthAPI;
}());
exports.TAuthAPI = TAuthAPI;

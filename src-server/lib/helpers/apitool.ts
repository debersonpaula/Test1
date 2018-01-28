import { Router } from 'express';
import { TNEMAServer, TModel } from 'tnema';
import * as utils from './utils';

/** Authenticated API */
export class TAuthAPI {

    private _router: Router;
    private _server: TNEMAServer;
    private _model: TModel;

    /** create authenticated route */
    constructor (server: TNEMAServer, document: string, url: string) {
        this._server = server;
        this._router = server.HttpServer.Router(url);
        this._model = server.MongoServer.SearchModel(document);
        this.defineRouteAll();
        this.defineRouteOne();
        this.defineRoutePost();
        this.defineRoutePut();
        this.defineRouteDelete();
    }

    private defineRouteAll() {
        this._router.get('/', this._server.AuthServer.AuthRoute, (req, res) => {
            this._model.find({}, (result, error) => utils.sendjson2(res, result, error));
        });
    }

    private defineRouteOne() {
        this._router.get('/:id', this._server.AuthServer.AuthRoute, (req, res) => {
            this._model.find({ _id: req.params.id }, (result, error) => utils.sendjson2(res, result, error));
        });
    }

    private defineRoutePost() {
        this._router.post('/', this._server.AuthServer.AuthRoute, (req, res) => {
            this._model.insert(req.body, (result, error) => utils.sendjson2(res, result, error));
        });
    }

    private defineRoutePut() {
        this._router.put('/', this._server.AuthServer.AuthRoute, (req, res) => {
            if (req.body._id) {
                this._model.updateById(req.body, req.body._id, (result, error) => utils.sendjson2(res, result, error));
            } else {
                utils.sendjson(res, 400, ['Invalid Request - Id = null']);
            }
        });
    }

    private defineRouteDelete() {
        this._router.delete('/:_id', this._server.AuthServer.AuthRoute, (req, res) => {
            if (req.params._id) {
                this._model.delete({_id: req.params._id});
                utils.sendjson(res, 200, [true]);
            } else {
                utils.sendjson(res, 400, ['Invalid Request - Id = null']);
            }
        });
    }
}
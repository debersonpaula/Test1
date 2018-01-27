import { TNEMAServer, TModel } from 'tnema';
import { Request, Response } from 'express';

export function create( server: TNEMAServer ) {
    const edition = server.HttpServer.Router('/api/edition');
    const model: TModel = server.MongoServer.SearchModel('lib_editions');

    edition.get('/', server.AuthServer.AuthRoute, (req: Request, res: Response) => {
        model.find({}, result => {
            sendjson(res, 200, result);
        });
    });

    edition.get('/:id', server.AuthServer.AuthRoute, (req: Request, res: Response) => {
        model.find({ _id: req.params.id }, result => {
            sendjson(res, 200, result);
        });
    });

    edition.put('/', server.AuthServer.AuthRoute, (req: Request, res: Response) => {
        if (req.body._id) {
            model.updateById(req.body, req.body._id, result => {
                sendjson(res, 200, [result]);
            });
        } else {
            sendjson(res, 400, ['Invalid Update']);
        }
    });

    edition.post('/', server.AuthServer.AuthRoute, (req: Request, res: Response) => {
        model.insert(req.body, result => {
            sendjson(res, 200, [result]);
        });
    });
}
// ===================================================
// === general methods ===============================
// ===================================================
function sendjson(res: Response, status: number, msg: any[]) {
    res.status(status).json({
        messages: msg,
        status: status
    });
}
// ===================================================
// ===================================================

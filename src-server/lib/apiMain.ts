import { TNEMAServer, TSchema } from 'tnema';

/** Create Instance of API Server */
export function create( server: TNEMAServer ) {
    // initializes model database
    const models: TSchema[] = require('./api/model');
    models.forEach( value => {
        server.MongoServer.AddModel(value);
    });
    // initialize api
    require('./api').create(server);
}

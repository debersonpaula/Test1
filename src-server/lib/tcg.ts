import { TNEMAServer, TSchema } from 'tnema';


export function create( server: TNEMAServer ) {
    // initializes model database
    const models: TSchema[] = require('./tcg/model');
    models.forEach( value => {
        server.MongoServer.AddModel(value);
    });
    // initialize api
    require('./tcg/api').create(server);
}

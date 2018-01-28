import { TNEMAServer, TModel } from 'tnema';
import { Request, Response } from 'express';
import { TAuthAPI } from '../helpers/apitool';

export function create( server: TNEMAServer ) {
    const edition = new TAuthAPI(server, 'lib_editions', '/api/edition');
}

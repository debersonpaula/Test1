// API Unit

import { TNEMAServer, TModel } from 'tnema';
import { Request, Response } from 'express';
import { TAuthAPI } from '../helpers/apitool';

export function create( server: TNEMAServer ) {
    const notes = new TAuthAPI(server, 'lib_notes', '/api/notes');
}
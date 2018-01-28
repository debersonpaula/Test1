import { Response } from 'express';

export function sendjson(res: Response, status: number, msg: any[]) {
    res.status(status).json({
        messages: msg,
        status: status
    });
}

export function sendjson2 (res: Response, result: any, error: any) {
    const inValidated = error && error.length;
    if (inValidated) {
        sendjson(res, 400, error);    
    } else {
        sendjson(res, 200, result);
    }

}
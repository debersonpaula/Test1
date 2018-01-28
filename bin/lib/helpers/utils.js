"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendjson(res, status, msg) {
    res.status(status).json({
        messages: msg,
        status: status
    });
}
exports.sendjson = sendjson;
function sendjson2(res, result, error) {
    var inValidated = error && error.length;
    if (inValidated) {
        sendjson(res, 400, error);
    }
    else {
        sendjson(res, 200, result);
    }
}
exports.sendjson2 = sendjson2;

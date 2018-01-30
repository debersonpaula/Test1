"use strict";
// API Unit
Object.defineProperty(exports, "__esModule", { value: true });
var apitool_1 = require("../helpers/apitool");
function create(server) {
    var notes = new apitool_1.TAuthAPI(server, 'lib_notes', '/api/notes');
}
exports.create = create;

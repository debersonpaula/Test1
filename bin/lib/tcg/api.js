"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apitool_1 = require("../helpers/apitool");
function create(server) {
    var edition = new apitool_1.TAuthAPI(server, 'lib_editions', '/api/edition');
}
exports.create = create;

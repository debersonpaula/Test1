"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tnema_1 = require("tnema");
module.exports = [
    new tnema_1.TSchema('lib_editions', {
        name: {
            type: String,
            default: '',
            required: [true, 'Name of Edition is required.'],
            unique: [true, 'Name of Edition already exists.']
        }
    })
];

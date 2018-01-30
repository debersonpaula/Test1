"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tnema_1 = require("tnema");
module.exports = [
    new tnema_1.TSchema('lib_notes', {
        subject: {
            type: String,
            default: '',
            required: [true, 'Subject is required.']
        },
        message: {
            type: String,
            default: ''
        }
    })
];

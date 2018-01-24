"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tnema_1 = require("tnema");
module.exports = {
    authModel: [
        new tnema_1.TSchema('dbUsers', {
            username: {
                type: String,
                default: '',
                required: [true, 'UserName is required'],
                unique: [true, 'This UserName already exists']
            },
            userpass: {
                type: String,
                default: '',
                required: [true, 'Password is required'],
            },
            firstname: {
                type: String,
                default: '',
                required: [true, 'First name of user is required']
            },
            lastname: {
                type: String,
                default: '',
                required: [true, 'Last name of user is required']
            }
        })
    ],
    authOptions: {
        sessionInfo: ['_id', 'username', 'firstname', 'lastname']
    }
};

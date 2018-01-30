import { TSchema } from 'tnema';

module.exports = [
    new TSchema('lib_notes' , {
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

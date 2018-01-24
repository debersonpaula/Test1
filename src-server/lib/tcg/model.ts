import { TSchema } from 'tnema';

module.exports = [
    new TSchema('lib_editions' , {
        name: {
            type: String,
            default: '',
            required: [true, 'Name of Edition is required.'],
            unique: [true, 'Name of Edition already exists.']
        }
    })
];

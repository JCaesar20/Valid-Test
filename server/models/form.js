const mongoose = require('mongoose');
const validator = require('validator');

const formSchema = new mongoose.Schema({
    anrede: {
        type: String,
        required: true,
        enum: ['Herr', 'Frau']
    },
    vorName: {
        type: String,
        required: true,
    },
    nachName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Wrong format of an E-mail")
            }
        }
    },
    anfrage: {
        type: String,
        required: true,
        enum: ['Option 1', 'Option 2', 'Option 3']
    },
    beschreibungsText: {
        type: String
    }
}, {
    timestamps: true
})

const Form = mongoose.model('Form', formSchema)

module.exports = Form
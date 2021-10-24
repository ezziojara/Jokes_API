const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, 'debe ingresar setup']
    },
    punchline: {
        type: String,
        required: [true, 'debe ingresar punchline']
    }
}, {timestamps: true});

const Jokes = mongoose.model('Jokes',JokesSchema);
module.exports = Jokes;
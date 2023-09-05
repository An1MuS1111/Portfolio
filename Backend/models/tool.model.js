const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true,
})


const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
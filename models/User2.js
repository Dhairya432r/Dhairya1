const mongoose = require('mongoose');

const grommingSchema = new mongoose.Schema({
    type:{
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    size:{
        type:String,
        required: true
    },
    old:{
        type:String,
        required: true
    },
    aggressive:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    time:{
        type:String,
        requiredd: true
    }

});
const Gromming = mongoose.model("Gromming",grommingSchema)
module.exports = Gromming;


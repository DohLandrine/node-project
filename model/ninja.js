const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// Create ninja schema and model
const NinjaSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Name field is required.']
    },
    rank : {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    // Add in geolocation.
    geometry: GeoSchema
    
});

// Creating a model with the schema
const Ninja = mongoose.model('ninja', NinjaSchema);

//exporting our model
module.exports = Ninja;

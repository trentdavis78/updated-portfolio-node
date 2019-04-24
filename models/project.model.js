const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: {type: String, required: true, max: 100},
    screenShotURL: {type: String}

});


// Export the model
module.exports = mongoose.model('Project', ProjectSchema);
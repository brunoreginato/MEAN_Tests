var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Person = new Schema({
    name: { type: String},
    imageUrl: { type: String}
});

module.exports = mongoose.model("Person",Person);
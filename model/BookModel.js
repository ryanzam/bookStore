var mongoose  = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    authour: String,
    published_date : String,
    updated: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('BookModel', BookSchema);
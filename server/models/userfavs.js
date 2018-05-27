const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userfavSchema = new Schema({
    userEmail: String,
    password: String,
    favcities:[]

});

module.exports = mongoose.model('userfav',userfavSchema);
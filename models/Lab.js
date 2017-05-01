/**
 * Created by astafursky on 1/10/17.
 */
var mongoose = require('mongoose');

var LabSchema = new mongoose.Schema({
    lab_name: String,
    lab_lookup: String
});

module.exports = mongoose.model('Lab', LabSchema);
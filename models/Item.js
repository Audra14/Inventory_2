/**
 * Created by astafursky on 1/5/17.
 */
var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    lab_id: String,
    lab_group: String,
    lab_name: String,
    item : String,
    qty_new : Number,
    qty_used : Number,
    max_target : Number,
    min_target : Number,
    submitted_by: String,
    date: String
});

module.exports = mongoose.model('Item', ItemSchema);

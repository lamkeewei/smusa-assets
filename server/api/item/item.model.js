'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  qtyAvailable: Number
});

module.exports = mongoose.model('Item', ItemSchema);
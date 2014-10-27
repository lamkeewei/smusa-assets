'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  name: String,
  contact: String,
  email: String,
  club: String,
  event: String,
  startDate: Date,
  endDate: Date,
  details: String,
  pending: { type: String, default: 'pending' },
  items: [{
    itemId: { type: Schema.Types.ObjectId, ref: 'Item' },
    qtyRequested: Number
  }]
});

module.exports = mongoose.model('Request', RequestSchema);
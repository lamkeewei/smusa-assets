'use strict';

var _ = require('lodash');
var Request = require('./request.model');
var moment = require('moment');

// Get list of requests
exports.index = function(req, res) {
  Request.find(function (err, requests) {
    if(err) { return handleError(res, err); }
    return res.json(200, requests);
  });
};

// Get a single request
exports.show = function(req, res) {
  Request.findById(req.params.id)
  .populate('items.itemId')
  .exec(function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    return res.json(request);
  });
};

// Get active 
exports.active = function(req, res) {
  var today = moment().hour(0).minute(0).second(0);

  Request.find({startDate: { $gt: today }})
  .populate('items.itemId')
  .exec(function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    return res.json(request);
  });
};

// Creates a new request in the DB.
exports.create = function(req, res) {
  delete req.body.status;
  
  Request.create(req.body, function(err, request) {
    if(err) { return handleError(res, err); }
    return res.json(201, request);
  });
};

// Updates an existing request in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  if(req.body.__v) { delete req.body.__v; }
  Request.findById(req.params.id, function (err, request) {
    if (err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    
    request.status = req.body.status;

    request.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, request);
    });
  });
};

// Deletes a request from the DB.
exports.destroy = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    request.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
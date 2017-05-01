/**
 * Created by astafursky on 1/5/17.
 */
var express = require('express');
var router = express.Router();

var Item = require('../models/Item.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
    Item.find(function (err, items) {
        if (err) return next(err);
        res.json(items);
    });
});

/* POST /todos */
router.post('/', function(req, res, next) {
    Item.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    Item.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Item.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

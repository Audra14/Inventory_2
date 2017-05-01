/**
 * Created by astafursky on 1/10/17.
 */
var express = require('express');
var router = express.Router();

var Lab = require('../models/Lab.js');

/* GET /labs listing. */
router.get('/', function(req, res, next) {
    Lab.find(function (err, items) {
        if (err) return next(err);
        res.json(items);
    });
});

/* GET /labs/id */
router.get('/:id', function(req, res, next) {
    Lab.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
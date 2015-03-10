'use strict';
/**
 * The following routine depicts a standard set of routes to model a REST
 * service around the object model <example>
 */
var Example = require('../models/example');
var router = require('express').Router();
var notifications = require('../lib/notifications');
var bodyParser = require('body-parser');

/**
 * Parsers
 */
router.use(bodyParser.json());                         // application/json
router.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded

/**
 * [renderJSON description]
 * @param {Object}   req  Express request object
 * @param {Object}   res  Express response object
 * @param {Function} next Callback function
 */
function renderJSON(req, res, next) {
    return function (err, records) {
        if (err) {
            return next(err);
        }
        res.status((res.status || (records.length > 0 ? 200 : 204))).json(records);
    };
}

router.get('/', function (req, res, next) {
    Example.find()
        .select('field1 field2 field3')
        .sort('field1')
        .exec(renderJSON.call(null, req, res, next));
});

router.post('/:parameterName', function (req, res, next) {
    // We assume POST contains ALL required fields mapped to equally named params
    var example = new Example(req.body);
    example.avatarDecorator();
    res.status(201);
    example.save(renderJSON.call(null, req, res, next));
    notifications.sockets.emit('examples:new', example);
});

router.get('/:parameterName', function (req, res, next) {
    Example.findOne({
        parameterName: req.params.parameterName
    }, renderJSON.call(null, req, res, next));
});

router.put('/:parameterName', function (req, res, next) {
    Example.findOneAndUpdate({
        parameterName: req.params.parameterName
    }, req.body, {}, renderJSON.call(null, req, res, next));
});

router.delete('/:parameterName', function (req, res, next) {
    Example.remove({
        parameterName: req.params.parameterName
    }, renderJSON.call(null, req, res, next));
});

module.exports = router;

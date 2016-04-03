/*jshint node:true*/
'use strict';
var express = require('express');
var router = express.Router();
var notfound_1 = require('./utils/notfound'); // use latest TS 1.5, inspired from ES6
//import four0four = require('./utils/404');
var data = require('./data');
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/vehicles', getVehicles);
router.get('/vehicles/:id', getVehicle);
router.get('/*', notfound_1.notFoundMiddleware);
module.exports = router;
//////////////
//EG TODO: find type for next argument
function getPeople(req, res, next) {
    res.status(200).send(data.getPeople());
}
function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.getPeople().filter(function (p) {
        return p.id === id;
    })[0];
    if (person) {
        res.status(200).send(person);
    }
    else {
        notfound_1.send404(req, res, 'person ' + id + ' not found');
    }
}
function getVehicles(req, res, next) {
    res.status(200).send(data.getVehicles());
}
function getVehicle(req, res, next) {
    var id = +req.params.id;
    var vehicle = data.getVehicles().filter(function (v) {
        return v.id === id;
    })[0];
    if (vehicle) {
        res.status(200).send(vehicle);
    }
    else {
        notfound_1.send404(req, res, 'vehicle ' + id + ' not found');
    }
}
//# sourceMappingURL=routes.js.map
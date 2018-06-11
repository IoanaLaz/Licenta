"use strict";

const substance = require('../models').substance;

exports.list = function (req, res) {
    substance.findAll({
        include: [{ all: true }]
    }).then(substance => {
        res.jsonp(substance);
    });
};

exports.create = function (req, res) {
    res.jsonp(substance.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    substance.findById(id).then(substance => {
        res.jsonp(substance);
    });
};

exports.updateSubstance = function (req, res) {
    let id = req.params.id;
    substance.findById(req.params.id)
        .then(substance => {
            if (!substance) {
                return res.status(400).send({
                    message: 'Substance Not Found'
                });
            }
            substance.update(req.body, {
                where:
                    { id: id }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    substance.findById(req.params.id)
        .then(substance => {
            if (!substance) {
                return res.status(400).send({
                    message: 'Substance Not Found',
                });
            }
            return substance
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
"use strict";

const drug = require('../models').drug;

exports.list = function (req, res) {
    drug.findAll({
        include: [{all: true}]
    }).then(drug => {
        res.jsonp(drug);
    });
};

exports.create = function (req, res) {
    res.jsonp(drug.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    drug.findById(id, {
        include: [{all: true}]
    }).then(drug => {
        res.jsonp(drug);
    });
};

exports.updateDrug = function (req, res) {
    let id = req.params.id;
    drug.findById(req.params.id)
        .then(drug => {
            if (!drug) {
                return res.status(400).send({
                    message: 'Drug Not Found'
                });
            }
            drug.update(req.body, {
                where:
                    {id: id}
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    drug.findById(req.params.id)
        .then(drug => {
            if (!drug) {
                return res.status(400).send({
                    message: 'Drug Not Found',
                });
            }
            return drug
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
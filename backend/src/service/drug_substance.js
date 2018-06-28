"use strict";

const drug_substance = require('../models').drug_substance;

exports.list = function (req, res) {
    drug_substance.findAll({
        include: [{ all: true }]
    }).then(drug_substance => {
        res.jsonp(drug_substance);
    });
};

exports.create = function (req, res) {
    res.jsonp(drug_substance.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    drug_substance.findById(id).then(drug_substance => {
        res.jsonp(drug_substance);
    });
};

exports.updateDrug_substance = function (req, res) {
    let id = req.params.id;
    drug_substance.findById(req.params.id)
        .then(drug_substance => {
            if (!drug_substance) {
                return res.status(400).send({
                    message: 'Drug_substance Not Found'
                });
            }
            drug_substance.update(req.body, {
                where:
                    { id: id }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    drug_substance.findById(req.params.id)
        .then(drug_substance => {
            if (!drug_substance) {
                return res.status(400).send({
                    message: 'Drug_substance Not Found',
                });
            }
            return drug_substance
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
"use strict";

const prescription_drug = require('../models').prescription_drug;

exports.list = function (req, res, next) {
    prescription_drug.findAll({
        where: req.query,
        include: [{ all: true }]
    }).then(prescription_drug => {
        res.jsonp(prescription_drug);
        console.log(prescription_drug)
    }).catch(next);
};

exports.create = function (req, res) {
    res.jsonp(prescription_drug.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    prescription_drug.findById(id, {
        include: [{ model: user, as: 'prescription_drug' }]
    }).then(prescription_drug => {
        res.jsonp(prescription_drug);
    });
};

exports.findPrescription_drug = function (req, res) {
    prescription_drug.findById(req.params.id, {
        include: [{ model: user, as: 'prescription_drug' }]
    }).then(prescription_drug => {
        res.jsonp(prescription_drug);
    })
}

exports.updatePrescription_drug = function (req, res) {
    let id = req.params.id;
    prescription_drug.findById(req.params.id)
        .then(prescription_drug => {
            if (!prescription_drug) {
                return res.status(400).send({
                    message: "Prescription_drug not found"
                });
            }
            prescription_drug.update(req.body, {
                where:
                    { id: id }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    prescription_drug.findById(req.params.id)
        .then(prescription_drug => {
            if (!prescription_drug) {
                return res.status(400).send({
                    message: 'Prescription_drug Not Found',
                });
            }
            return prescription_drug
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}
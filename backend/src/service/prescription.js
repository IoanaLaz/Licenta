"use strict";

const prescription = require('../models').prescription;
const prescription_drug = require('../models').prescription_drug;
var Sequelize = require('sequelize');
var sequelize = new Sequelize('hospital_prescription', 'postgres', null, {
    host: 'localhost',
    port: '32768',
    dialect: 'postgres'
});

exports.list = function (req, res, next) {
    prescription.findAll({
        where: req.query,
        include: [{all: true}]
    }).then(prescription => {
        res.jsonp(prescription);
        console.log(prescription)
    }).catch(next);
};

exports.create = function (req, res) {
    console.log(req.body);
    prescription.create(req.body).then(() => {
        sequelize.query("SELECT MAX(id) FROM public.prescriptions", {type: sequelize.QueryTypes.SELECT})
            .then((response => {
                console.log(response);
                let aux = {
                    drugId: req.body.id_drug,
                    prescriptionId: response[0].max
                };

                res.jsonp(prescription_drug.create(aux));
            }));
    });
};

exports.findById = function (req, res) {
    let id = req.params.id;
    prescription.findById(id, {
        include: [{all: true}]
    }).then(prescription => {
        res.jsonp(prescription);
    });
};

exports.findPrescription = function (req, res) {
    prescription.findById(req.params.id, {
        include: [{model: user, as: 'prescription'}]
    }).then(prescription => {
        res.jsonp(prescription);
    })
}

exports.updatePrescription = function (req, res) {
    let id = req.params.id;
    prescription.findById(req.params.id)
        .then(prescription => {
            if (!prescription) {
                return res.status(400).send({
                    message: "Prescription not found"
                });
            }
            prescription.update(req.body, {
                where:
                    {id: id}
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    prescription.findById(req.params.id)
        .then(prescription => {
            if (!prescription) {
                return res.status(400).send({
                    message: 'Prescription Not Found',
                });
            }
            return prescription
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}
"use strict";

const doctor = require('../models').doctor;

exports.list = function (req, res) {
    console.log('ceva');
    doctor.findAll({
        include: [{ all: true }]
    }).then(doctors => {
        console.log(doctors);
        res.jsonp(doctors);
    });
};

exports.create = function (req, res) {
    res.jsonp(doctor.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    doctor.findById(id).then(doctor => {
        res.jsonp(doctor);
    });
};

exports.updateDoctor = function (req, res) {
    let id = req.params.id;
    doctor.findById(req.params.id)
        .then(doctor => {
            if (!doctor) {
                return res.status(400).send({
                    message: 'Doctor Not Found'
                });
            }
            doctor.update(req.body, {
                where:
                    { id: id }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    doctor.findById(req.params.id)
        .then(doctor => {
            if (!doctor) {
                return res.status(400).send({
                    message: 'Doctor Not Found',
                });
            }
            return doctor
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
"use strict";
const jwt = require('jsonwebtoken');
const jwtPrivateKey = "cefvvaesjbdsafdas";

const patient = require('../models').patient;

exports.list = function (req, res) {
    patient.findAll({
        include: [{ all: true }]
    }).then(patient => {
        res.jsonp(patient);
    });
};

exports.create = function (req, res) {
    res.jsonp(patient.create(req.body));
};

exports.findById = function (req, res) {
    let id = req.params.id;
    patient.findById(id).then(patient => {
        res.jsonp(patient);
    });
};

exports.login = (req, res) => {
    patient.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(patient => {
        if (!patient) {
            return res.status(204).send({
                message: "Patient not found!"
            });
        }
        let tokenString = jwt.sign({
            id: patient.id,
            name: patient.name,
            username: patient.username,
            updateDate: patient.updatedAt,
            expiresInMinutes: 1440 * 30
        }, jwtPrivateKey);
        return res.status(200).jsonp({
            token: tokenString
        });
    }).catch(error => res.status(400).send(error));
};

exports.sync = (req, res) => {
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
        try {
            var decoded = jwt.verify(token, jwtPrivateKey);
        } catch (err) {
            // console.log(err);
            console.log('malformed');
            return res.status(401).send({
                message: 'Unauthorized'
            });
        }
        console.log(decoded);
        patient.findOne({
            where: {id: decoded.id}
            , include: [{all: true}]
        }).then((patient) => {
            let date = new Date(decoded.updateDate);
            if (patient.updatedAt.getTime() === date.getTime()) {
                res.status(200).send({
                    student: patient,
                    message: 'Authorized'
                });
            } else {
                throw 'token not up to date';
            }
        }).catch(error => {
            console.log(error);
            res.status(401).send({
                message: 'Unauthorized'
            });
        });

    } else {
        res.status(401).send({
            message: 'UnAuthorized'
        });
    }
};

exports.updatePatient = function (req, res) {
    let id = req.params.id;
    patient.findById(req.params.id)
        .then(patient => {
            if (!patient) {
                return res.status(400).send({
                    message: 'Patient Not Found'
                });
            }
            patient.update(req.body, {
                where:
                    { id: id }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
    let id = req.params.id;
    patient.findById(req.params.id)
        .then(patient => {
            if (!patient) {
                return res.status(400).send({
                    message: 'Patient Not Found',
                });
            }
            return patient
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
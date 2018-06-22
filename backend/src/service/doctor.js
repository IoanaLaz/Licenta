"use strict";
const jwt = require('jsonwebtoken');
const jwtPrivateKey = "cefvvaesjbdsafdas";

const doctor = require('../models').doctor;

exports.list = function (req, res) {
    doctor.findAll({
        include: [{ all: true }]
    }).then(doctors => {
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

exports.login = (req, res) => {
    console.log('tttttttt'+req);
    doctor.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(doctor => {
        console.log('doctor' + doctor);
        if (!doctor) {
            return res.status(204).send({
                message: "Doctor not found!"
            });
        }
        let tokenString = jwt.sign({
            id: doctor.id,
            name: doctor.name,
            username: doctor.username,
            updateDate: doctor.updatedAt,
            expiresInMinutes: 1440 * 30
        }, jwtPrivateKey);
        console.log(res);
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
        doctor.findOne({
            where: {id: decoded.id}
            , include: [{all: true}]
        }).then((doctor) => {

            let date = new Date(decoded.updateDate);
            if (doctor.updatedAt.getTime() === date.getTime()) {
                res.status(200).send({
                    doctor: doctor,
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
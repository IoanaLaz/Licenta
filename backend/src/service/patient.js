"use strict";

const patient = require('../models').patient;

exports.list = function (req, res) {
  patient.findAll({
    include: [{ all:true }]
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
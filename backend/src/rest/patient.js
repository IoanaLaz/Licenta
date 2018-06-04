var express = require('express');
var router = express.Router();
var patient = require('../service/').patient;

router.get('/', patient.list);
router.get('/:id', patient.findById);
router.post('/', patient.create);
router.delete('/:id', patient.delete);
router.put('/:id', patient.updatePatient);

module.exports = router;
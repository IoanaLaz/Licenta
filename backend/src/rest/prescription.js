var express = require('express');
var router = express.Router();
var prescription = require('../service/').prescription;

router.get('/', prescription.list);
router.get('/:id', prescription.findById);
router.get('/:id/client', prescription.findById);
router.post('/', prescription.create);
router.delete('/:id', prescription.delete);
router.put('/:id', prescription.updatePrescription);

module.exports = router;
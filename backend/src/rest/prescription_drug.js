var express = require('express');
var router = express.Router();
var prescription = require('../service/').prescription_drug;

router.get('/', prescription_drug.list);
router.get('/:id', prescription_drug.findById);
router.get('/:id/client', prescription_drug.findById);
router.post('/', prescription_drug.create);
router.delete('/:id', prescription_drug.delete);
router.put('/:id', prescription_drug.updatePrescription);

module.exports = router;
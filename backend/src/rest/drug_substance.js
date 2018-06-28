var express = require('express');
var router = express.Router();
var drug = require('../service/').drug_substance;

router.get('/', drug_substance.list);
router.get('/:id', drug_substance.findById);
router.post('/', drug_substance.create);
router.delete('/:id', drug_substance.delete);
router.put('/:id', drug_substance.updateDrug_substance);

module.exports = router;
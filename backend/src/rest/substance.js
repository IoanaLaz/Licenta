var express = require('express');
var router = express.Router();
var substance = require('../service/').substance;

router.get('/', substance.list);
router.get('/:id', substance.findById);
router.post('/', substance.create);
router.delete('/:id', substance.delete);
router.put('/:id', substance.updateSubstance);

module.exports = router;
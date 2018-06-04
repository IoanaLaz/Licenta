var express = require('express');
var router = express.Router();
var drug = require('../service/').drug;

router.get('/', drug.list);
router.get('/:id', drug.findById);
router.post('/', drug.create);
router.delete('/:id', drug.delete);
router.put('/:id', drug.updateDrug);

module.exports = router;
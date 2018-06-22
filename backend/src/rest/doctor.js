var express = require('express');
var router = express.Router();
var doctor = require('../service/').doctor;

router.get('/', doctor.list);
router.get('/:id', doctor.findById);
router.post('/', doctor.create);
router.delete('/:id', doctor.delete);
router.put('/:id', doctor.updateDoctor);
router.post('/logindoctor',doctor.login);
router.post('/sync',doctor.sync);

module.exports = router;
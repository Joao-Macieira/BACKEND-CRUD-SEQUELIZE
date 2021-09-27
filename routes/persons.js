const express = require('express');

const personController = require('../controllers/person');

const model = require('../models/index');

const router = express.Router();

router.get('/', personController.index.bind(null, model.models));
router.get('/create', personController.createForm);
router.post('/create', personController.createProcess.bind(null, model.models));

module.exports = router;

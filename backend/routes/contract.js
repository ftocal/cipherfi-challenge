const express = require('express');
const router = express.Router();

const ContractController = require('../controllers/ContractController');

router.get('/:id', ContractController.getContract);


module.exports = router;
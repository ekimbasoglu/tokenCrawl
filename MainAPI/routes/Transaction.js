const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/Transaction');
const verifyAdminRole = require('../middlewares/verifyAdminRole');

router.post('/get', transactionController.getRecent); // Get the recent transactions if the API allows the recent ones
router.post('/get/:id', transactionController.get); // Search specific transaction from the API

module.exports = router;

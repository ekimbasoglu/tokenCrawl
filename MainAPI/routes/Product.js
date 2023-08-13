const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product');
const verifyAdminRole = require('../middlewares/verifyAdminRole');

router.get('/get', productController.getAll);
router.get('/get/:id', productController.get);
router.post('/create', verifyAdminRole, productController.post);
router.patch('/patch/:id', verifyAdminRole, productController.patch);
router.patch('/delete/:id', verifyAdminRole, productController.delete);

module.exports = router;

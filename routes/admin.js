const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin')

router.post('/add-data',adminController.postAddData);

router.get('/add-data',adminController.getAddData);

router.get('/get-data', adminController.getData);

router.get('/edit-data/:productId', adminController.getEditData);

router.post('/edit-data', adminController.postEditData);

router.post('/delete-data', adminController.postDeleteData);

module.exports = router;
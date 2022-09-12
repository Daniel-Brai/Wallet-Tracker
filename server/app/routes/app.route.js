// dependencies
const express = require('express');
const router = express.Router()
const appController =  require('../controllers/app.controller')

// routes
router
    .route('/categories')
    .get(appController.getCategories)
    .post(appController.createCategory)

router
    .route('/transactions')
    .get(appController.getTransactions)
    .post(appController.createTransaction)

router
    .route('/transactions/:id')
    .delete(appController.deleteTransaction)

router
    .route('/labels')
    .get(appController.getLabels)

// export routes
module.exports = router

const { Router } = require('express');
const { getCategories, createCategories, deleteCategories } = require('../controllers/categories.controllers');

const router = Router();

router.get('/categories', getCategories);

router.post('/categories', createCategories);

router.put('/categories/:id', deleteCategories)

module.exports = router;

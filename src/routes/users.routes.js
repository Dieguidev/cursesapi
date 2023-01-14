const { Router } = require('express');
const { getAllUsers } = require('../controllers/users.controllers');

const router = Router();

router.get('/users',getAllUsers);


module.exports= router;
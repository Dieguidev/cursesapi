const { Router } = require('express');
const { getAllUsers, getUserId, getUserWithCurses,createUser,updateUser,addCourseToUser } = require('../controllers/users.controllers');

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserId);

router.get('/users/:id/courses', getUserWithCurses);

router.post('/users',createUser)

router.put('/users/:id',updateUser)

router.post('/users/:id/addcourse',addCourseToUser);

module.exports = router;
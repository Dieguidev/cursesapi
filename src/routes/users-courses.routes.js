const {Router}=require('express')
const { addCourseToUser } = require("../controllers/users-courses.controllers");

const router = Router();


router.post('/users/:id/',addCourseToUser);

module.exports=router;
const { getAllCourses,getCoursesWithAllcategories,createCourse } = require("../controllers/courses.controllers");
const { Router } = require('express');

const router = Router();

router.get('/courses', getAllCourses);

//endpoint para traer users con todas sus relaciones
router.get('/courses/:id/coursesAdnVideos',getCoursesWithAllcategories);

router.post('/courses',createCourse);



module.exports = router;
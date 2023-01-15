const { getAllCourses, getCoursesWithAllcategories, createCourse, getCoursesWithCategoriesVideos, uUpdateCourse } = require("../controllers/courses.controllers");
const { Router } = require('express');

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/:id/categoriesAndVideos', getCoursesWithCategoriesVideos)

//endpoint para traer users con todas sus relaciones
router.get('/courses/:id/coursesAdnVideos', getCoursesWithAllcategories);

router.post('/courses', createCourse);

router.put('/courses/:id',uUpdateCourse)

module.exports = router;
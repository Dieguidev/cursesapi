const UsersCoursesService = require('../services/users-courses.services')

const addCourseToUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { idcourse } = req.body;
    const newCourseUser = { userId: id, courseId: idcourse }
    const result = await UsersCoursesService.addCourseToUser(newCourseUser)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { addCourseToUser }

const CoursesServices = require("../services/courses.services");



const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAllCourses();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CoursesServices.createCourse(newCourse);
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}


const getCoursesWithAllcategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getCoursesWithAllcategories(id);
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { getAllCourses, getCoursesWithAllcategories, createCourse }
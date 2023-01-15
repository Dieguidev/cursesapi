const Userservices = require("../services/user.services")


const getAllUsers = async (req, res) => {
  try {
    const result = await Userservices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Userservices.getUserId(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserWithCurses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Userservices.getUserWithCurses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await Userservices.createUser(newUser);
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;
    const field = {firstName, lastName, password}
    const { id } = req.params;
    const result = await Userservices.updateUser(field, id);
    res.json(result)
  }
  catch (error) {
    res.status(400).json(error.message);
  }
}

const addCourseToUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseId } = req.body;
    const newCourseUser = { userId: id, courseId}
    const result = await Userservices.addCourseToUser(newCourseUser)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { getAllUsers, getUserId, getUserWithCurses, createUser, updateUser,addCourseToUser }
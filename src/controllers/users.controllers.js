const Userservices = require("../services/user.services")


const getAllUsers = async (re,res)=> {
  try {
    const result = await Userservices.getAll();
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports={getAllUsers}
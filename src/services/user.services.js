const Users = require("../models/users.models");


class Userservices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw new error;
    }
  }
}

module.exports= Userservices;
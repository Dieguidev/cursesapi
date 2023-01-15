const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users-courses.models");
const Users = require("../models/users.models");
const { where } = require('sequelize');

class Userservices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw new error;
    }
  };

  static async getUserId(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ['password', "createdAt", "updatedAt"] }
      });
      return result;
    } catch (error) {
      throw new error;
    }
  };

  static async getUserWithCurses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ['password', "createdAt", "updatedAt"] },
        include: {
          model: UsersCourses,
          as: 'course',
          attributes: { exclude: ["users_id", "course_id", "userId", "courseId"] },
          include: {
            model: Courses,
            as: 'course'
          }
        }
      });
      return result;
    } catch (error) {
      throw new error;
    }
  }

  static async createUser(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw new error;
    }
  }
  static async updateUser(field, id) {
    try {
      const result = await Users.update(field, {
        where: { id }
      });
      return result;
    } catch (error) {
      throw new error;
    }
  }

  static async addCourseToUser(newCourseUser) {
    try {
      const result = await UsersCourses.create(newCourseUser);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = Userservices;
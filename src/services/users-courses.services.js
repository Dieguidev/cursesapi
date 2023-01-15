const UsersCourses = require("../models/users-courses.models")


class UsersCoursesService {
  static async addCourseToUser(newCourseUser) {
    try {
      const result = await UsersCourses.create(newCourseUser);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersCoursesService;
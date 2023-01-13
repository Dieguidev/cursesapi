const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const UsersCourses = db.define('users_categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'users_id'
  },
  CourseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'course_id'
  }
})

module.exports= UsersCourses;
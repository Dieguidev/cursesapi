const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UsersCourses = require("./users-courses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");


const initModels = () => {

    //hasMany -> tiene muchios
  //belongsTo -> pertenece a

  UsersCourses.belongsTo(Users, {as: 'author',foreignKey:'users_id'});
  Users.hasMany(UsersCourses, {as: 'course',foreignKey:'users_id'});

  UsersCourses.belongsTo(Courses,{as:'course',foreignKey:'course_id'});
  Courses.hasMany(UsersCourses,{as:'users',foreignKey:'course_id' });

  Categories.belongsTo(Courses,{as: 'course',foreignKey:'course_id'});
  Courses.hasMany(Categories,{as: 'category',foreignKey:'course_id'});

  Videos.belongsTo(Courses,{as:'course', foreignKey:'course_id'});
  Courses.hasMany(Videos,{as:'video',foreignKey:'course_id'});
}

module.exports=initModels;
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users-courses.models");
const Users = require("../models/users.models");
const db = require("../utils/database");


const users = [
  { firstName: 'Diego', lastName: 'Garay', email: 'diegogaraycullas@gmail.com', password: '1234' },
  { firstName: 'Miky', lastName: 'Garay', email: 'babymiky@gmail.com', password: '1234' },
  { firstName: 'Ana', lastName: 'Cullas', email: 'analuisacullas@gmail.com', password: '1234' },
  { firstName: 'Ely', lastName: 'Galvan', email: 'elizabeth@gmail.com', password: '1234' }
];

const courses = [
  { title: 'Matematica', instructor: 'Diego' },
  { title: 'Ciencias', description: 'vamos por mas', instructor: 'Dino' },
  { title: 'Comunicacion', description: 'vamos por mas', instructor: 'Jesus' },
  { title: 'Sociales', description: 'vamos por mas', instructor: 'Pablo' },
  { title: 'Tecnologia', description: 'vamos por mas', instructor: 'Ely' },
]

const usersCourses = [
  { userId: 1, courseId: 1 },
  { userId: 2, courseId: 2 },
  { userId: 3, courseId: 3 },
  { userId: 4, courseId: 4 },
  { userId: 1, courseId: 5 },
  { userId: 2, courseId: 1 },
  { userId: 3, courseId: 2 },
  { userId: 4, courseId: 3 },
  { userId: 1, courseId: 4 },
  { userId: 2, courseId: 5 },
  { userId: 3, courseId: 1 },
  { userId: 4, courseId: 2 }
]





db.sync({ force: true })
  .then(() => {
    console.log('sembrando datos');
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      courses.forEach(course => Courses.create(course));
    }, 100)
    setTimeout(() => {
      usersCourses.forEach(uc => UsersCourses.create(uc));
    }, 300)
  })
  .catch(error => console.log(error));
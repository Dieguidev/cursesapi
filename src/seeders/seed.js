const Courses = require("../models/courses.models");
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







db.sync({ force: true })
  .then(() => {
    console.log('sembrando datos');
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      courses.forEach(course=>Courses.create(course));
    },100)
  })
  .catch(error => console.log(error));
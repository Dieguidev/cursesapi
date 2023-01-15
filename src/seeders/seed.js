const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users-courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
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

const categories = [
  { name: 'mate 1', courseId: 1 },
  { name: 'mate 2', courseId: 1 },
  { name: 'mate 3', courseId: 1 },
  { name: 'mate 4', courseId: 1 },
  { name: 'mate 5', courseId: 1 },
  { name: 'ct 1', courseId: 2 },
  { name: 'ct 2', courseId: 2 },
  { name: 'ct 3', courseId: 2 },
  { name: 'comu 1', courseId: 3 },
  { name: 'comu 2', courseId: 3 },
  { name: 'comu 3', courseId: 3 },
  { name: 'soc 1', courseId: 4 },
  { name: 'soc 2', courseId: 4 },
  { name: 'CSS3', courseId: 5 },
  { name: 'JavaScript', courseId: 5 },
  { name: 'HTML5', courseId: 5 },
]

const videos = [
  { title: 'introduccion', url: 'https://www.dfsddscsd.com', courseId: 1 },
  { title: 'Razones', url: 'https://www.dfsddscsd.com', courseId: 1 },
  { title: 'Vectores', url: 'https://www.dfsddscsd.com', courseId: 2 },
  { title: 'Momentop de fuerza', url: 'https://www.dfsddscsd.com', courseId: 2 },
  { title: 'Analisis de textos', url: 'https://www.dfsddscsd.com', courseId: 3 },
  { title: 'El verbo', url: 'https://www.dfsddscsd.com', courseId: 3 },
  { title: 'La sociedad', url: 'https://www.dfsddscsd.com', courseId: 4 },
  { title: 'La realidad Nacional', url: 'https://www.dfsddscsd.com', courseId: 4 },
  { title: 'Ciclo for', url: 'https://www.dfsddscsd.com', courseId: 5 },
  { title: 'Scoope', url: 'https://www.dfsddscsd.com', courseId: 5 },

]

db.sync({ alter: true })
  .then(() => {
    console.log('sembrando datos');
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      courses.forEach(course => Courses.create(course));
    }, 100);
    setTimeout(() => {
      usersCourses.forEach(uc => UsersCourses.create(uc));
    }, 150);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category))
    }, 200);
    setTimeout(() => {
      videos.forEach(video => Videos.create(video))
    }, 250);
  })
  .catch(error => console.log(error));
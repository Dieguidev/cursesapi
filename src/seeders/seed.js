const Users = require("../models/users.models");
const db = require("../utils/database");


const users = [
  { firstName: 'Diego', lastName: 'Garay', email: 'diegogaraycullas@gmail.com', password: '1234' },
  { firstName: 'Miky', lastName: 'Garay', email: 'babymiky@gmail.com', password: '1234' },
  { firstName: 'Ana', lastName: 'Cullas', email: 'analuisacullas@gmail.com', password: '1234' },
  { firstName: 'Ely', lastName: 'Galvan', email: 'elizabeth@gmail.com', password: '1234' }
];



db.sync({ force: true })
  .then(()=>{
    console.log('sembrando datos');
    users.forEach(user=>Users.create(user));
  })
  .catch(error=>console.log(error));
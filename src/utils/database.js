const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: "cursosapi",   //*********** */
  username: "postgres",      //nuestro usuario
  host: "localhost",      //127.0.0.1
  port: "5432",
  password: "021087Mikeyla",     //tu propia contraseña
  dialect: "postgres",     //la base de datos que estamos usando
  //logging: false,      //silencia toda la informacion que da el sequelize en la consola
})

module.exports = db;
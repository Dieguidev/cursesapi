const express = require('express');
const initModels = require('./models/init.models');
const db = require('./utils/database');
const usersRoutes = require('./routes/users.routes')


const app = express();
app.use(express.json());


const PORT =  8000;

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error));

  initModels();

db.sync({ force: false }) 
  .then(() => console.log('bd sincronizada'))
  .catch((error) => console.log(error))


app.use('/api/v1', usersRoutes);


app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
const {DataTypes}=require('sequelize');
const db = require('../utils/database');


const Videos= db.define('videos',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  url:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    }
  },
  CourseId:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'course_id',
  }
})

module.exports= Videos;
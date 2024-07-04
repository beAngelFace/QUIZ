'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoryie extends Model {
   
    static associate(models) {
      this.hasMany(models.Data, { foreignKey: 'categoryId' })
      
    }
  }
  Categoryie.init({
    game: DataTypes.STRING,
    special: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoryie',
  });
  return Categoryie;
};
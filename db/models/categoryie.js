'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoryie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
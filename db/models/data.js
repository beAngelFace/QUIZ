'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    static associate(models) {
      this.belongsTo(models.Categoryie, { foreignKey: 'categoryId' })
      }
  }
  Data.init({
    categoryId: DataTypes.BIGINT,
    question: DataTypes.BIGINT,
    answer: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};
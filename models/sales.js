'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sales.init({
    NoOfBokks: DataTypes.INTEGER,
    NoOfSales: DataTypes.INTEGER,
    Availabl: DataTypes.INTEGER,
    Required: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales',
  });
  return sales;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Chart.init({
    dx_esrd: DataTypes.DECIMAL,
    dx_mi: DataTypes.BIGINT,
    dx_stroke: DataTypes.BIGINT,
    dx_htn: DataTypes.BIGINT,
    dx_lpd: DataTypes.BIGINT,
    dx_obe: DataTypes.BIGINT,
    dx_dneu: DataTypes.BIGINT,
    dx_cad: DataTypes.BIGINT,
    dx_pvd: DataTypes.BIGINT,
    dx_anm: DataTypes.BIGINT,
    POP: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chart',
  });
  return Chart;
};
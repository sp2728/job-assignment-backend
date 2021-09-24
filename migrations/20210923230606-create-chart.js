'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Charts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dx_esrd: {
        type: Sequelize.DECIMAL
      },
      dx_mi: {
        type: Sequelize.BIGINT
      },
      dx_stroke: {
        type: Sequelize.BIGINT
      },
      dx_htn: {
        type: Sequelize.BIGINT
      },
      dx_lpd: {
        type: Sequelize.BIGINT
      },
      dx_obe: {
        type: Sequelize.BIGINT
      },
      dx_dneu: {
        type: Sequelize.BIGINT
      },
      dx_cad: {
        type: Sequelize.BIGINT
      },
      dx_pvd: {
        type: Sequelize.BIGINT
      },
      dx_anm: {
        type: Sequelize.BIGINT
      },
      POP: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Charts');
  }
};
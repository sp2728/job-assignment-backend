'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.bulkInsert('Charts', [
      {
        dx_esrd:1,
        dx_mi:1,
        dx_stroke:3,
        dx_htn:39,
        dx_lpd:38,
        dx_obe:19,
        dx_dneu:8,
        dx_cad:12,
        dx_pvd:6,
        dx_anm:4,
        POP:'both',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dx_esrd:2,
        dx_mi:1,
        dx_stroke:2,
        dx_htn:37,
        dx_lpd:35,
        dx_obe:15,
        dx_dneu:5,
        dx_cad:17,
        dx_pvd:4,
        dx_anm:13,
        POP:'ckd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dx_esrd:2,
        dx_mi:2,
        dx_stroke:8,
        dx_htn:71,
        dx_lpd:62,
        dx_obe:30,
        dx_dneu:16,
        dx_cad:22,
        dx_pvd:9,
        dx_anm:16,
        POP:'diab',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.bulkDelete('Charts', null, {});
  }
};

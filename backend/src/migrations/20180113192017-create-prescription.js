'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client: {
        type: Sequelize.INTEGER
      },
      id_drug: {
        type: Sequelize.INTEGER
      },
      diagnostic: {
        type: Sequelize.STRING
      },
      release_date:{
        type: Sequelize.DATE
      },
      dosage: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prescriptions');
  }
};
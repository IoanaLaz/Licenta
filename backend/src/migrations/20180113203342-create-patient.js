'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('patients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            birthday: {
                type: Sequelize.DATE,
            },
            username: {
                type: Sequelize.STRING,
            },

            password: {
                type: Sequelize.STRING,
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
        queryInterface.dropTable('patients');
    }
};
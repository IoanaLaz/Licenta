'use strict';
module.exports = (sequelize, DataTypes) => {
    var doctor = sequelize.define('doctor', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        specialization: DataTypes.STRING,
        town: DataTypes.STRING,
        username: DataTypes.VARCHAR,
        password: DataTypes.VARCHAR,
        id_prescription: DataTypes.INTEGER
    });
    doctor.associate = (models) => {
        console.log("-> one to many");
        // doctor.hasToMany (models.prescription, { foreignKey: 'id_drug' });

    }
    return doctor;
};
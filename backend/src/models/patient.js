'use strict';
module.exports = (sequelize, DataTypes) => {
    var patient = sequelize.define('patient', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        username: DataTypes.STRING,
        password: DataTypes.STRING,

    });
    patient.associate = (models) => {
        console.log(" -> patient has many prescriptions");
        patient.hasMany(models.prescription, { foreignKey: 'id_patient' })
    }
    return patient;
};
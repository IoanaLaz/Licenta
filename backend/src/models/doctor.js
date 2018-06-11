'use strict';
module.exports = (sequelize, DataTypes) => {
    var doctor = sequelize.define('doctor', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        specialization: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        id_prescription: DataTypes.INTEGER
    });

    doctor.associate = function (models) {
        doctor.belongsTo(models.prescription, { foreignKey: 'id_prescription', onDelete: 'CASCADE' })
    };
    return doctor;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var patient = sequelize.define('patient', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    diagnostic: DataTypes.STRING,
    username: DataTypes.VARCHAR,
    password: DataTypes.VARCHAR,
    id_prescription: DataTypes.INTEGER

  }); 
  patient.associate = (models) => {
    console.log("-> patient has many prescriptions");
    patient.hasMany (models.prescription, { foreignKey: 'id_patient'})
  }
  return patient;
};
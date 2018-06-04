'use strict';
module.exports = (sequelize, DataTypes) => {
  var prescription = sequelize.define('prescription', {
    date: DataTypes.DATE,
    id_doctor: DataTypes.INTEGER,
    id_patient: DataTypes.INTEGER,
    diagnostic: DataTypes.STRING,
    release_date: DataTypes.DATE,
    dosage: DataTypes.INTEGER
  });

  prescription.associate = (models) => {
    console.log("-> prescription belongs to patient");
    prescription.belongsTo(models.patient, { foreignKey: 'id_patient', onDelete: 'CASCADE'});
    console.log("-> prescription belongs to doctor") ;
    prescription.belongsTo(models.doctor, {foreignKey: 'id_doctor', onDelete: 'CASCADE'})
  }

  return prescription;
};
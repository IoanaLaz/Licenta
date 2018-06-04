'use strict';
module.exports = (sequelize, DataTypes) => {
    var prescription_drug = sequelize.define('prescription_drug', {
        id_prescription: DataTypes.INTEGER,
        id_drug: DataTypes.INTEGER

    });

    prescription_drug.associate = (models) => {
        console.log("-> prescription belongs to patient");
        prescription.belongsTo(models.patient, { foreignKey: 'id_patient', onDelete: 'CASCADE'});
        console.log("-> prescription belongs to doctor") ;
        prescription.belongsTo(models.doctor, {foreignKey: 'id_doctor', onDelete: 'CASCADE'})
    }

    return prescription;
};
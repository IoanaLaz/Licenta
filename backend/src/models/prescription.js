'use strict';
module.exports = (sequelize, DataTypes) => {
    var prescription = sequelize.define('prescription', {
        date: DataTypes.DATE,
        id_patient: DataTypes.INTEGER,
        diagnostic: DataTypes.STRING,
        release_date: DataTypes.DATE,
        dosage: DataTypes.INTEGER
    });

    prescription.associate = (models) => {
        console.log("-> prescription belongs to patient");
        prescription.belongsTo(models.patient, { foreignKey: 'id_patient', onDelete: 'CASCADE' });
        console.log("-> prescription belongs to doctor");
        prescription.hasMany(models.doctor, { foreignKey: 'id_prescription', onDelete: 'CASCADE' });
        prescription.belongsToMany(models.drug, {
            through: {
                model: models.prescription_drug,
                unique: false,
            }
        }, { foreignKey: 'prescriptionId', onDelete: 'CASCADE' });
    }

    return prescription;
};
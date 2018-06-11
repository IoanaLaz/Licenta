'use strict';
module.exports = (sequelize, DataTypes) => {
    var prescription_drug = sequelize.define('prescription_drug', {
        prescriptionId: DataTypes.INTEGER,
        drugId: DataTypes.INTEGER

    });

    prescription_drug.associate = (models) => {
        console.log("-> prescription belongs to patient");
        prescription_drug.belongsTo(models.prescription, { foreignKey: 'prescriptionId', onDelete: 'CASCADE' });
        console.log("-> prescription belongs to doctor");
        prescription_drug.belongsTo(models.drug, { foreignKey: 'drugId', onDelete: 'CASCADE' })
    }

    return prescription_drug;
};
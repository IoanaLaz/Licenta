'use strict';
module.exports = (sequelize, DataTypes) => {
    var substance = sequelize.define('substance', {
        substance_name: DataTypes.STRING,
        harmful_substance: DataTypes.STRING
    });
    substance.associate = (models) => {
        console.log("-> substance belongs to substance");
        patient.belongsToMany(models.drug, {
            through: {
                model: drug_substance
            }
        }, { foreignKey: 'id_substance' })
    }
    return substance;
};
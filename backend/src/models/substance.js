'use strict';
module.exports = (sequelize, DataTypes) => {
    var substance = sequelize.define('substance', {
        name: DataTypes.STRING,
        harmful_substance: DataTypes.STRING
    });
    substance.associate = (models) => {
        console.log("-> substance belongs to drug_substance");
        patient.hasMany (models.drug_substance, { foreignKey: 'id_substance'})
    }
    return substance;
};
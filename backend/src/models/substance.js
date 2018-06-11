'use strict';
module.exports = (sequelize, DataTypes) => {
    var substance = sequelize.define('substance', {
        substance_name: DataTypes.STRING,
        harmful_substance: DataTypes.STRING
    });
    substance.associate = (models) => {
        console.log("-> substance belongs to substance");
        substance.belongsToMany(models.drug, {
            through: {
                model: models.drug_substance
            }
        }, { foreignKey: 'substanceId' })
    }
    return substance;
};
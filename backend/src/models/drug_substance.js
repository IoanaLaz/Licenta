'use strict';
module.exports = (sequelize, DataTypes) => {
    var drug_substance = sequelize.define('drug_substance', {
        drugId: DataTypes.INTEGER,
        substanceId: DataTypes.INTEGER
    });
    drug_substance.associate = (models) => {
        console.log("-> many to many");
        drug_substance.belongsTo(models.drug, { foreignKey: 'drugId' });
        console.log("->drug belongs to sales");
        drug_substance.belongsTo(models.substance, { foreignKey: 'substanceId' });
    }
    return drug_substance;
};
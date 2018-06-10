'use strict';
module.exports = (sequelize, DataTypes) => {
    var drug_substance = sequelize.define('drug_substance', {
        id_drug: DataTypes.INTEGER,
        id_substance: DataTypes.INTEGER
    });
    drug_substance.associate = (models) => {
        // console.log("-> many to many");
        // // drug.belongsToMany (models.prescription, { foreignKey: 'id_drug' });
        // console.log("->drug belongs to sales");
        // //drug.belongsTo (models.sale, { foreignKey: 'id_drug'});
    }
    return drug;
};
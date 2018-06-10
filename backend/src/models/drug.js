'use strict';
module.exports = (sequelize, DataTypes) => {
    var drug = sequelize.define('drug', {
        name: DataTypes.STRING,
        producer: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    });
    drug.associate = (models) => {
        console.log("-> many to many");
        drug.belongsToMany(models.prescription, {
            through: {
                model: 'prescription_drug'
            }
        }, { foreignKey: 'id_drug' });
        console.log("->drug belongs to substance");
        drug.belongsToMany(models.substance, {
            through: {
                model: 'drug_substance'
            }
        }, { foreignKey: 'id_drug' });
    }
    return drug;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
    var drug = sequelize.define('drug', {
        name: DataTypes.STRING,
        producer: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    });

    drug.associate = (models) => {
        drug.belongsToMany(models.prescription, {
            through: {
                model: models.prescription_drug
            }
        }, { foreignKey: 'drugId' });
        console.log("->drug belongs to substance");
        drug.belongsToMany(models.substance, {
            through: {
                model: models.drug_substance,
                unique: false,
            }
        }, { foreignKey: 'drugId', onDelete: 'CASCADE' });
    }
    return drug;
};
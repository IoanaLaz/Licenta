'use strict';
module.exports = (sequelize, DataTypes) => {
  var drug = sequelize.define('drug', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  });
  drug.associate = (models) => {
    console.log("-> many to many");
   // drug.belongsToMany (models.prescription, { foreignKey: 'id_drug' });
    console.log("->drug belongs to sales");
    //drug.belongsTo (models.sale, { foreignKey: 'id_drug'});
  }
  return drug;
};
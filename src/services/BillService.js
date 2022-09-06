var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');
var productService = require('../services/productService');
var billDetailService = require('../services/BillDetailService')

const billService = sequelize.define('Factura', {
  // Model attributes are defined here
  IDFactura: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique : true,
    autoIncrement : true
  },
  Fecha: {
    type: DataTypes.DATEONLY,
  }
},
  {
  timestamps: false
});
billService.belongsToMany(productService, { through: billDetailService , foreignKey: "IDFactura"});
productService.belongsToMany(billService, { through: billDetailService , foreignKey: "IDProducto"});

module.exports = billService;  
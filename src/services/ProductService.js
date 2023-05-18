var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');
var billDetailService = require('./BillDetailService')

const productService = sequelize.define('Producto', {
  // Model attributes are defined here
  IDProducto: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Precio: {
    type: DataTypes.DECIMAL(10,2)
  },
  Nombre : {
    type: DataTypes.STRING,
  }
},
  {
  timestamps: false
});

productService.hasMany(billDetailService, { as: "Factura" , foreignKey: "IDProducto"});

module.exports = productService;  
var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');
var productService = require('../services/productService');
var billDetailService = require('../services/BillDetailService')
var clientService = require('../services/ClientService');


const billService = sequelize.define('Factura', {
  // Model attributes are defined here
  IDFactura: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  IDCliente: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    references: {
      model: clientService, 
      key: 'IDCliente'
    }
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
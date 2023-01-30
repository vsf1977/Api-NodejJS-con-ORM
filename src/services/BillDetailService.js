var sequelize = require('../server/ConnectionString');
var productService = require('../services/productService');
var billService = require('../services/BillService');
const { DataTypes } = require('sequelize');

const billDetailService = sequelize.define('DetalleFactura', {
  IDDetalleFactura: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },  
  Cantidad: {
    type: DataTypes.INTEGER,
  },
  IDFactura: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    references: {
      model: billService, 
      key: 'IDFactura'
    }
  },
  IDProducto: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    references: {
      model: productService, 
      key: 'IDProducto'
    }
  }
},
  {
  timestamps: false
});

module.exports = billDetailService;  
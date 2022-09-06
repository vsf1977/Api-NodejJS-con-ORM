var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');
var billService = require('../services/BillService');
var billDetailService = require('../services/BillDetailService')

const productService = sequelize.define('Producto', {
  // Model attributes are defined here
  IDProducto: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique : true,
    autoIncrement : true
  },
  Cantidad:{
    type : DataTypes.INTEGER
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


module.exports = productService;  
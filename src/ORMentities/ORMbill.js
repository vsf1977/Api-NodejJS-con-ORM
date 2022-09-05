var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');

const ormBill = sequelize.define('Factura', {
  // Model attributes are defined here
  IDFactura: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique : true,
    autoIncrement : true
  },
  IDCliente: {
    type: DataTypes.INTEGER,
  },
  Fecha: {
    type: DataTypes.DATEONLY,
  }
},
  {
  timestamps: false
});

module.exports = ormBill;  
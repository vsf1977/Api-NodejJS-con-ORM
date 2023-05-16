var sequelize = require('../server/ConnectionString');
var billService = require('./BillService');
const { DataTypes } = require('sequelize');

const clientService = sequelize.define('Cliente', {
  // Model attributes are defined here
  IDCliente: {
    type: 'UNIQUEIDENTIFIER',
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING,
  },
  Apellidos: {
    type: DataTypes.STRING,
  },
  FechaNacimiento: {
    type: DataTypes.DATE,
  }
},
  {
  timestamps: false
});

clientService.hasMany(billService, { as: "Factura" , foreignKey: "IDCliente"});

module.exports = clientService;  
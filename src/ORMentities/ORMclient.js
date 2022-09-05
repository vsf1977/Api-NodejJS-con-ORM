var sequelize = require('../server/ConnectionString');
const { DataTypes } = require('sequelize');

const ormClient = sequelize.define('Cliente', {
  // Model attributes are defined here
  IDCliente: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique : true
  },
  Nombre: {
    type: DataTypes.STRING,
  },
  Apellidos: {
    type: DataTypes.STRING,
  },
  FechaNacimiento: {
    type: DataTypes.DATEONLY,
  }
},
  {
  timestamps: false
});


module.exports = ormClient;  
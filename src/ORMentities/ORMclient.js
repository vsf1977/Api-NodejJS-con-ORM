var sequelize = require('../server/connectionString');
const { DataTypes } = require('sequelize');

const ORMClient = sequelize.define('Cliente', {
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


module.exports = ORMClient;  
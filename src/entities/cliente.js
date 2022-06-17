var sequelize = require('../server/connectionString');
const { DataTypes } = require('sequelize');

const Client = sequelize.define('Cliente', {
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


class Cliente{       

  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  
    getIdcliente() {
      return this.idcliente;
    }

    getNombre() {
      return this.nombre;
    }

    getApellidos() {
      return this.apellidos;
    }

    getfechaNacimiento() {
        return this.fechaNacimiento;
    }

    setIdcliente(Idcliente) {
        this.idcliente = Idcliente;
    }
  
    setNombre(Nombre) {
        this.nombre = Nombre;
    }
  
    setApellidos(Apellidos) {
        this.apellidos = Apellidos;
    }
  
    setfechaNacimiento(FechaNacimiento) {
        this.fechaNacimiento = FechaNacimiento;
    }
         
}

module.exports = Client;  
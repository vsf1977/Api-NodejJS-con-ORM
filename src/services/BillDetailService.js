var sequelize = require('../server/ConnectionString');

const billDetailService = sequelize.define('DetalleFactura', {
  // Model attributes are defined here
  // IDDetalleFactura: {
  //   type: DataTypes.BIGINT,
  //   primaryKey: true,
  //   unique : true,
  //   autoIncrement : true
  // },  
  // Cantidad: {
  //   type: DataTypes.INTEGER,
  // }
  // IDFactura: {
  //   type: DataTypes.BIGINT,
  //   references: {
  //     model: billService, 
  //     key: 'id'
  //   }
  // },
  // IDCliente: {
  //   type: DataTypes.BIGINT,
  //   references: {
  //     model: clientService, 
  //     key: 'id'
  //   }
  // }
},
  {
  timestamps: false
});

module.exports = billDetailService;  
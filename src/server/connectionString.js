const { Sequelize } = require('sequelize');

var config = {
    user: 'Usuario',
    password: '123456',
    server: 'VLADIMIR-PC\\SQLEXPRESS', 
    database: 'Facturacion',
    port:1433,
    trustServerCertificate: true
};

const sequelize = new Sequelize('Facturacion', 'Usuario', '987654321', {
    host: 'localhost',
    dialect: 'mssql',   
    port:49789,
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize;


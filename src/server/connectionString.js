const { Sequelize } = require('sequelize');

var config = {
    user: 'Usuario',
    password: '123456',
    server: 'VLADIMIRPC\\SQLEXPRESS', 
    database: 'Facturacion',
    port:1433,
    trustServerCertificate: true
};

const sequelize = new Sequelize('Facturacion', 'Usuario', '123456', {
    host: 'localhost',
    dialect: 'mssql',   
    port:59245,
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize;


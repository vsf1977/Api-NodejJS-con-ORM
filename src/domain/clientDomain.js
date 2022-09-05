const { Op } = require("sequelize");
var ormClient = require('../ormentities/Ormclient');

class ClientDomain {

    constructor(){     
    }

    async findAll() {
        return ormClient.findAll().then(function(clients) {
            if (clients != null)
                return clients
            else
                return "No clients"
            }).catch( error => {
                return error
            })
    }

    async findById(id) {
        return ormClient.findByPk(id).then(function(cli) {
            if (cli != null)
                return cli
            else
                return "No client with this id"
            }).catch( error => {
                return error
            })
    }
    
    async findByName(name) {
        return ormClient.findAll({ where: { Nombre: {[Op.like]: '%' + name + '%' } } }).then(function(cli) {
            if (cli != null)
                return cli
            else
                return "No client with this name"
            }).catch( error => {
                return error
            })
    }

    async insert(req) {
        return ormClient.create({ IDCliente: req.body.IDCliente,
                                  Nombre: req.body.Nombre,
                                  Apellidos: req.body.Apellidos,
                                  FechaNacimiento: req.body.FechaNacimiento
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async update(req) {
        return ormClient.update({ Nombre: req.body.Nombre,
                                  Apellidos: req.body.Apellidos,
                                  FechaNacimiento: req.body.FechaNacimiento },
                                  { where: 
                                  { IDCliente: req.body.IDCliente }
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async delete(IDCliente) {
        return ormClient.destroy({ where: {IDCliente: IDCliente}
            }).then(function(res) {  
                console.log(res)
                if (res == 1)
                    return 200
                else
                    return 204
            }).catch( error => {
                return error.statusCode
            })
    }
}
module.exports = ClientDomain;
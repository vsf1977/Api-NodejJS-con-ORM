const { Op } = require("sequelize");
var clientService = require('../services/ClientService');

class ClientDomain {

    constructor(){     
    }

    async findAll() {
        return clientService.findAll().then(function(clients) {
            if (clients != null)
                return clients
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async findAllWithInfo() {
        return clientService.findAll({ include: ["Factura"] }).then(function(clients) {
            if (clients != null)
                return clients
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async findById(id) {
        return clientService.findByPk(id).then(function(cli) {
            if (cli != null)
                return cli
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async findByIdWithInfo(id) {
        return clientService.findByPk(id,{ include: ["Factura"] }).then(function(cli) {
            if (cli != null)
                return cli
            else
                return []
            }).catch( error => {
                return error
            })
    }
    
    async findByName(name) {
        return clientService.findAll({ where: { Nombre: {[Op.like]: '%' + name + '%' } } }).then(function(cli) {
            if (cli != null)
                return cli
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async insert(req) {
        return clientService.create({ IDCliente: req.body.IDCliente,
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
        return clientService.update({ Nombre: req.body.Nombre,
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
        return clientService.destroy({ where: {IDCliente: IDCliente}
            }).then(function(res) {  
                console.log(res)
                if (res == 1)
                    return 200
                else
                    return 204
            }).catch(error => {
                return error.index
            })
    }
}
module.exports = ClientDomain;
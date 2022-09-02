var express = require('express');
var Router = express.Router();
const { Op } = require("sequelize");
var ORMClient = require('../ORMentities/ORMclient');

Router.get('/getAll', function (req, res) {   
  
    ORMClient.findAll().then(function(clients) {
        if (clients != null)
            res.send(clients)
        else
            res.send("No clients")
    }).catch( error => {
        res.send(error); 
    })   
});

Router.get('/getById/:id', function (req, res) {      
    ORMClient.findByPk(req.params.id).then(function(cli) {
        if (cli != null)
            res.send(cli)
        else
            res.send("No client with this id")
    }).catch( error => {
        res.send(error); 
    }) 
});

Router.get('/getByName/:name', function (req, res) {      
    ORMClient.findAll({ where: { Nombre: {[Op.like]: '%' + req.params.name + '%' } } }).then(function(user) {
        if (user != null)
            res.send(user)
        else
            res.send("No client with this id")
    }).catch( error => {
        res.send(error); 
    }) 
});


Router.post('', function (req, res) {  
    ORMClient.create({ IDCliente: req.body.IDCliente,
                     Nombre: req.body.Nombre,
                     Apellidos: req.body.Apellidos,
                     FechaNacimiento: req.body.FechaNacimiento  
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 
});


Router.put('', function (req, res) {    
    ORMClient.update({ Nombre: req.body.Nombre,
                     Apellidos: req.body.Apellidos,
                     FechaNacimiento: req.body.FechaNacimiento  
    }, { where: {
        IDCliente: req.body.IDCliente
      }
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 

});

Router.delete('', function (req, res) {    
    ORMClient.destroy({ where: {
        IDCliente: req.body.IDCliente
      }
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 

});


module.exports = Router;
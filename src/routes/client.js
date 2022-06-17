var express = require('express');
var Router = express.Router();
const { Op } = require("sequelize");
var Cliente = require('../entities/cliente');

Router.get('/getAll', function (req, res) {   
  
    Cliente.findAll().then(function(clients) {
        if (clients != null)
            res.send(clients)
        else
            res.send("No clients")
    }).catch( error => {
        res.send(error); 
    })       
    
});


Router.get('/getById/:id', function (req, res) {      

    Cliente.findByPk(req.params.id).then(function(user) {
        if (user != null)
            res.send(user)
        else
            res.send("No client with this id")
    }).catch( error => {
        res.send(error); 
    }) 
});

Router.get('/getByName/:name', function (req, res) {      

    Cliente.findAll({ where: { Nombre: {[Op.like]: '%' + req.params.name + '%' } } }).then(function(user) {
        if (user != null)
            res.send(user)
        else
            res.send("No client with this id")
    }).catch( error => {
        res.send(error); 
    }) 
});


Router.post('', function (req, res) {    
    
    Cliente.create({ IDCliente: req.body.IDCliente,
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

    Cliente.update({ Nombre: req.body.Nombre,
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

    Cliente.destroy({ where: {
        IDCliente: req.body.IDCliente
      }
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 

});


module.exports = Router;
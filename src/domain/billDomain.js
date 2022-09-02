var express = require('express');
var Router = express.Router();
const { Op } = require("sequelize");
var ORMBill = require('../ORMentities/ORMbill');

Router.get('/getAll', function (req, res) {   
    ORMBill.findAll().then(function(bills) {
        if (bills != null)
            res.send(bills)
        else
            res.send("No bills")
    }).catch( error => {
        res.send(error); 
    })           
});

Router.get('/getById/:id', function (req, res) {      
    ORMBill.findByPk(req.params.id).then(function(bill) {
        if (bill != null)
            res.send(bill)
        else
            res.send("No bill with this id")
    }).catch( error => {
        res.send(error); 
    }) 
});

Router.post('', function (req, res) {    
    ORMBill.create({ IDCliente: req.body.IDCliente,
                     Fecha: req.body.Fecha
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 
});

Router.put('', function (req, res) {    
    ORMBill.update({ Fecha: req.body.Fecha
    }, { where: {
        IDFactura: req.body.IDFactura
      }
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 
});

Router.delete('', function (req, res) {    
    debugger
    ORMBill.destroy({ where: {
        IDFactura: req.body.IDFactura
      }
    }).then(function(res) {       
        res.send(res)       
    }).catch( error => {
        res.send(error); 
    }) 
});

module.exports = Router;
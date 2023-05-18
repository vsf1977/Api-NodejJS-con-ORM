const { Op } = require("sequelize");
var productService = require('../services/ProductService');

class ProductDomain {

    constructor(){     
    }

    async findAll() {
        return productService.findAll({ include: ["Factura"] }).then(function(products) {
            if (products != null)
                return products
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async findById(id) {
        return productService.findByPk(id).then(function(pro) {
            if (product != null)
                return product
            else
                return []
            }).catch( error => {
                return error
            })
    }

    async findByIdWithInfo(id) {
        return productService.findByPk(id).then(function(product) {
            if (product != null)
                return product
            else
                return []
            }).catch( error => {
                return error
            })
    }
    

    async insert(req) {
        return productService.create({ IDProducto: req.body.IDProducto,
                                       Precio: req.body.Precio,
                                       Nombre: req.body.Nombre
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async update(req) {
        return productService.update({ Nombre: req.body.Nombre,
                                       Precio: req.body.Precio },
                                  { where: 
                                  { IDProducto: req.body.IDProducto }
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async delete(IDProducto) {
        return productService.destroy({ where: {IDProducto: IDProducto}
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
module.exports = ProductDomain;
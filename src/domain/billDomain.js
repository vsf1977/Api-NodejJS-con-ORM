var billService = require('../services/BillService');
var Product = require('../services/ProductService');
var sequelize = require('../server/ConnectionString');

class BillDomain {

    constructor(){     
    }

    async findAll() {
        // return billService.findAll({include: Product}).then(function(bills) {
        //     if (bills != null)
        //         return bills
        //     else
        //         return []
        // }).catch( error => {
        //     return error
        // })
        const res = await sequelize.query('select IDFactura, Fecha, Nombre, Apellidos, sum(total) as Total, sum(cantidad) as Cantidad from '+
                                     '(select f.IDFactura, f.fecha, c.Nombre, c.Apellidos, sum(d.cantidad* p.precio) as total, d.cantidad from factura f join Cliente c on f.IDCliente=c.IDCliente join DetalleFactura d on f.IDFactura=d.IDFactura join Producto p on p.IDProducto=d.IDProducto '+
                                     'group by f.IDFactura, f.fecha, c.Nombre, c.Apellidos, d.cantidad, p.precio)t group by IDFactura , fecha, Nombre, Apellidos', {
                                        raw: true
        });
        return res[0]
    }

    async findById(id) {
        return billService.findByPk(id).then(function(bill) {
            if (bill != null)
                return bill
            else
                return []
        }).catch( error => {
            return error
        })
    }

    async insert(req) {
        return billService.create({IDFactura: req.body.IDFactura,
                        IDCliente: req.body.IDCliente,
                        Fecha: req.body.Fecha
            }).then(function(res) {       
                return res
        }).catch( error => {
            return error
        })
    }

    async update(req) {
        return billService.update({Fecha: req.body.Fecha,
                                   IDCliente: req.body.IDCliente}, 
                                  { where: { IDFactura: req.body.IDFactura }
                }).then(function(res) { 
                    console.log(req.body.IDCliente, req.body.Fecha)      
                return res
        }).catch( error => {
            return error
        })
    }

    async delete(IDFactura) {
        return billService.destroy({ where: {IDFactura: IDFactura}
            }).then(function(res) {  
                if (res == 1)
                    return 200
                else
                    return 204
        }).catch( error => {
            return error.index
        })
    }
}
module.exports = BillDomain;
var ormBill = require('../ormentities/Ormbill');

class BillDomain {

    constructor(){     
    }

    async findAll() {
        return ormBill.findAll().then(function(bills) {
            if (bills != null)
                return bills
            else
                return "No bills"
            }).catch( error => {
                return error
            })
    }

    async findById(id) {
        return ormBill.findByPk(id).then(function(bill) {
            if (bill != null)
                return bill
            else
                return "No bill with this id"
            }).catch( error => {
                return error
            })
    }

    async insert(req) {
        return ormBill.create({IDFactura: req.body.IDFactura,
                        IDCliente: req.body.IDCliente,
                        Fecha: req.body.Fecha
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async update(req) {
        return ormBill.update({Fecha: req.body.Fecha}, 
            { where: { IDFactura: req.body.IDFactura }
            }).then(function(res) {       
                return res
            }).catch( error => {
                return error
            })
    }

    async delete(IDFactura) {
        return ormBill.destroy({ where: {IDFactura: IDFactura}
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
module.exports = BillDomain;
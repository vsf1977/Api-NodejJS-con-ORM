class Bill{       

    constructor () {   
    }
    
    getIdCliente() {
      return this.idCliente;
    }

    getIdFactura() {
      return this.idFactura;
    }

    getFecha() {
        return this.fecha;
    }

    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }
  
    setIdFactura(idFactura) {
        this.idFactura = idFactura;
    }
  
    setFecha(fecha) {
        this.fecha = fecha;
    }
           
  }

  module.exports = Bill
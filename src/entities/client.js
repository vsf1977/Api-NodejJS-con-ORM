class Cliente{       

    constructor () {   
    }
    
    getIdcliente() {
      return this.idcliente;
    }

    getNombre() {
      return this.nombre;
    }

    getApellidos() {
      return this.apellidos;
    }

    getfechaNacimiento() {
        return this.fechaNacimiento;
    }

    setIdcliente(Idcliente) {
        this.idcliente = Idcliente;
    }
  
    setNombre(Nombre) {
        this.nombre = Nombre;
    }
  
    setApellidos(Apellidos) {
        this.apellidos = Apellidos;
    }
  
    setfechaNacimiento(FechaNacimiento) {
        this.fechaNacimiento = FechaNacimiento;
    }
           
  }

  module.exports = Cliente
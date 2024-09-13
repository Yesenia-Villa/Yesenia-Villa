
const promptc= require("prompt-sync")();
const porc=0.15
class cooperativa{
   
    constructor(nombre,apellido,rfc,direccion,telefono,hrstras,cosxhra){
        this._nombre = nombre;
        this._apellido =apellido;
        this._rfc =rfc;
        this.__direccion = direccion;
        this._telefono = telefono;
        this._cosxhra=this._cosxhra;
        this._hrstras=this._hrstras;
        this._agregarem=[];
        this._sueldo =0;
       
    }
//getter
//setter
agregarEm()  {
    let tam=parseInt(prompt("cantidad de empleados a dar de alta:"));
    for(let i=0; i<tam;i++){
        this._nombre=parseInt(prompt("ingresa el nombre del empleado:"));
        this._hrstras=prompt("numero de horas trabajadas:");
        this._cosxhra=parseFloat(prompt("ingrese el costo por hora:"));
    }
    let empleado={
        nombre:this._nombre,
        apellido:this._apellido,
        rfc:this._rfc,
        telefono:this._telefono,
        direccion:this.__direccion,
        hrstras:this._hrstras,
        cosxhra:this._cosxhra,
        sueldo: this.calcularsueldo()
    }
this._agregarem.push(empleado);
}

eliminarEmp() {
    this._agregaremp.length>0?
    this._agregaremp.pop():
    console.log(`no ha registro que eliminar`);

    this.mostrarEmpleados();
}

calcularsueldo()  {
    if(this._hrstras>8){
        this._sueldo=this._cosxhra*this._hrstras;
        return (this._sueldo=
        this._sueldo+this._cosxhra*porc*(this._hrstras-8));
    }else{ 
       return( this._sueldo=this._cosxhra*this._hrstras);  
    }
}

mostrarEmpleados(){
    this._agregarem.length>0
    ?this._agregaremp.map((emp)=>{
console.log(
    `el nombre es ${emp.nombre}y tiene un sueldo ${emp.sueldo}`);
})
}

menulista(){
    let listar=parseInt(promptc("que desea hacer: 1. agregar, 2.mostrar, 3.eliminar, 4.salir"));
    while(listar!=4){
        switch(listar){
            case 1:
                this.agregaremp();
                break;
            case 2:
                this.mostrarEmpleados();
                break;
            case 3:
                this.eliminarEmp();
             case 4:
                break;
        }
    }
}
}
 
let empleados=new cooperativa();
empleados.agregarem();
empleados.mostrarEmpleados();
empleados.eliminarEmp();
//empleados.menulista();
//definir clases con atributos dentro del constructor
class Persona{
    constructor(nombre,edad,sexo,direccion){
        this._nombre=nombre;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
    }
    //metodo saludar
   saludar(){
console.log(`Hola ${this.nombre}`);

    }
    //encapsulamiento setter y gestter
    get nombre(){
        return this._nombre
    }
    set nombre(values){
        this._nombre=values;
    }
}
let persona1=new Persona("yesi",18,"F","Balancan");
persona1.nombre="juan"
console.log(persona1._nombre);
persona1.saludar()
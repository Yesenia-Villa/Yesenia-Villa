const promptc=require(`prompt-sync`)();

class Persona{
constructor(nombre,edad, sexo, direccion ,telefono ){
    this._nombre=nombre;
    this._edad=edad;
    this._sexo=sexo;
    this._direccion =direccion;
    this._telefono=telefono;
    this._array =[];
}
añadir (){
    let tamaño =parseInt(promptc("ingrese el numero de empleadps a agregar:"));
    for(let i=0; i<tamaño; i++){
        let nombre=promptc("ingrese el nombre del empleados a gregar:");
        let edad = promptc("ingrese la edad:");
        let sexo = promptc("ingrese el sexo:");
        let direccion= promptc("ingrese la direccion:");
        let telefono = promptc("ingrese el numero de telefono:");

        let personas = new Persona(nombre, edad, sexo, direccion,telefono);
        this._array.push(personas);
    }
}

mostrarEmpleado(){
    console.log("empleado:");
    this._array.forEach((persona) =>{
        console.log(`nombre: ${persona._nombre}, edad: ${persona._edad}, sexo: ${persona._sexo}, direccion: ${persona._direccion},telefono: ${persona._telefono}`);
  
    });
}
}
let persona = new Persona
persona.añadir();
persona.mostrarEmpleado();
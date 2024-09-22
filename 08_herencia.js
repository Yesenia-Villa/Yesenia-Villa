//regla sintactica de js
// esta primera clase se le puede llamar plantilla
class Persona {
    constructor( nombre, apellido, edad, sexo, direccion, telefono, correro, horario){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._sexo = sexo;
        this._direccion = direccion;
        this._telefono = telefono;
        this._correo = correro;
        this._horario = horario;
    }
}
//esta clase se llama herencia de la primera clase
    class Alumno extends Persona {
        constructor(nombre,apellido,horario, matricula, carrera, sementre) {
            super(nombre,apellido,horario);
            this._matricula = matricula;
            this._carrera = carrera;
            this._sementre = sementre;
            
        }

        mensaje(){
         console.log(`soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
    }
        
    }

    let alumno1=new Alumno("Yesi","Villa","10-16","23E20140","Sistemas","3");
    alumno1.mensaje();
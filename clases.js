



class Alumno {
    constructor(nombre, ncontrol,) {
       this._nombre = nombre;
        this._ncontrol = ncontrol;
        

    }
}
class Docente {
    constructor(nombre){
        this._nombre=nombre
    }
}
class Materia  {
    constructor(nombre, docente) {
       this._nombre = nombre;
        this._docente= docente;
    }
}
class Calificaciones extends Alumno {
    constructor(nombre, ncontrol, materia, calificaciones) {
    super(nombre,ncontrol)
this._materia=materia;
this._calificaciones= calificaciones;

    }
    calcularPromedio(){
        const Total =this._calificaciones.reduce((acc,cal)=>acc + cal, 0)
        return (Total/this._calificaciones.length).toFixed(2);
    }
    mostrarInfo(){
        console.log(`No.control:${this._ncontrol}`);
        console.log(`Alumno: ${this._nombre}`);
        console.log(`Materia: ${this._materia}`);
        console.log(`Docente: ${this._materia._nombre}`);
        console.log(`Calificaciones: ${this._calificaciones.join(",")}`);
        console.log(`Promedio: ${this.calcularPromedio()}`);
        console.log(`--------------------`)
    }
}

const Profe1 = new Docente(`Jose`)
const Profe2 = new Docente (`Pedro`)
const Profe3 = new Docente (`juan`)

const matematicas = new Materia("Dany",Profe1)
const programacion = new Materia(`Programacion`, Profe3)
const fisica = new Materia (`fisica`, Profe2)

//calificacion luis 
const calificacionL2 = new Calificaciones("Luis", "23E20123", matematicas, [75,85])
const calificacionL3 = new Calificaciones("Luis","23E20123",fisica,[70,30])
const calificacionL4 = new Calificaciones("Luis", "23E20123" ,programacion, [75,90])

//calificacion Dany
const calificacionD1 = new Calificaciones ("Dny", "21E20113", matematicas, [90,95])
const calificacionD2 = new Calificaciones ("Dany", "21E20113", fisica, [85.75])
const calificacionD3 = new Calificaciones ("Dany", "23E20113", programacion, [30,30])


calificacionL2.mostrarInfo()
calificacionL3.mostrarInfo()
calificacionL4.mostrarInfo()


calificacionD1.mostrarInfo()
calificacionD2.mostrarInfo()
calificacionD3.mostrarInfo()


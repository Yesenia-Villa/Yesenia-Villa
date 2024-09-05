//factory function
const Persona1={
    nombre:"Yesi",
    edad:18

}

const Persona2={
    nombre:"Yesenia",
    edad:15 
}
function datosPersona (nombre,edad){
    return{
        nombre:nombre,
        edad:edad,
        active:true
    }
}
letPersona1=datosPersona("yesi",18);
letPersona2=datosPersona("yesenia",15);
//console.log(Persona1,Persona2);
//camel case

const datosUsuario={
    nombre:"yesi",
    edad:18,
    password:"1234455",
    direccion :{
        colonia:"El carmen",
        calle:"principal",
        numext:123
    },
    sueldo:234.24,
     guardarUsuario:function(){
console.log ("Guardar usuario....");
    }
}
//datosUsuario.guardarUsuario();

//Add registros y parametros a los objetos definidos 

const user={id:1};
user.nombre="yesi";
user.guardarUser=function(){
    console.log("Guardar user...");

}
 //console.log(user);
 //user.guardarUser();

 //objetos definidos
 //const Person= Object.freeze({id:1,nombre:"yesi"});
 const Person= Object.seal({id:1,nombre:"yesi"});
Person.id=2
Person.nombre="yesi"
Person.edad=23;

//console.log(person);
//pasar funciones como parametros
function pitbull(nombre){
    this._nombre=nombre;
}
function Animal(Fn,argumento){
    return new Fn (argumento)
}
let Animal1=Animal(pitbull,"Fidudays")
console.log(Animal1);
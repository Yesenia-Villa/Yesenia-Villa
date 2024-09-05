const persona={
    nombre:"yesi",
    edad:"13",
    sexo:"null",
}
//const datos=[1,"hola",23];
//let[num1,cadena]=datos

let nombre,edad,sexo;

let{...datos}=persona
let{nombre:name}=persona
datos.nombre="juan"
console.log(persona.edad)


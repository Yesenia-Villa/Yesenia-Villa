/*
const prompt=require(`prompt-sync`)();


let numero1=23;
let numero2=23;
  

numero1=parseInt(prompt("ingrese el numero 1:"));
numero2=parseInt(prompt("ingrese el valor2:"));
console.log(numero1*numero2);
*/

//realizar un programa que contenga un arreglo indefinido, por lo menos 4
//en el que solicite a travez del teclado el tamaño y se ingrese
//por lo menos 4 valores de cualquier tipo,imprimir los valores en pantalla
const prompt=require(`prompt-sync`)(); //pide los datos desde la consola
let arreglo=[];
let numero=parseInt(prompt("ingrese el numero de persona a agregar"));

while(numero<2){
    numero = parseInt(prompt("ingrese un numero valido mayor a 1:"));
}

for (let i=0;i<numero;i++){
    let persona ={
        nombre: prompt(`ingrese el nombre de la persona `),
        edad:  prompt(`ingrese el edad de la persona `),
    };
    arreglo.push(persona) 
        console.log(`nombre: `+persona.nombre, "apellido:"+persona.apellido);


        };
    


arreglo.map((data)=>{
    console.log(data);
});



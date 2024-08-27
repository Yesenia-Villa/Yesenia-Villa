// crear una lista con diferentes tipos de datos
let datos=[ {
    nombre:"Yesenia",
    apellidos:"Villa",
    edad:"18",
    estudiante:false
},
{
nombre: "Yesi",
apellidos:"Villa"
,edad:"18",
estudiante:false
}
]

const info=()=>{
  /*  for(let arr in arreglo){
        console.log(arreglo[arr]);
    }
}
*/ 
/*
for (let lis in datos){
    console.log(`${lis}:${datos[lis]}`);
}*/
/*
let valores=Object.values(datos);
valores.map((data) =>{
    console.log(`${index}:${data}`);
});*/
/*
 let valores =Object.keys(datos);
 for (let informacion of valores) {
        console.log(informacion);
 }
*/
/*
let valores=Object.entries(data);
valores.map(dar=>{
    console.log(dat);
})
    */
/*
Object.entries(datos).forEach(([key,value])=>{
    console.log(`El ${key} ${value}`)
})*/
datos.map((data)=>{
    console.log(`el nombre es:${data.nombre}`)
});
};

info();
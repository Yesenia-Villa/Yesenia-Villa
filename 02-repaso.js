/*/Realizar un arreglo con 2 dimensiones y guardar dos arreglos 
internos y dar lectura a los datos internos*/


 array= [[1,2],[3,4]];
/* 
    const datosArreglo= ()=>{
      array.map((datos)=>{
         datos.map((valores, i)=>{
        console.log(`${i}=${valores}`);
        })  
     });
    };

     datosArreglo();
*/
/*for of

const  datosArreglo = () => {
    for (const datos of array) {
        for (const valores of datos) {
            console.log(`${datos.indexOf(valores)}=${valores}`);
        }
    }
 };
 
 datosArreglo();
 */

//for in 
/*const datosArreglo = () => {
    for (const datosIndex in array){
        for (const valoresIndex in array[datosIndex]) {
            console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
        }
    }
};
datosArreglo();
*/

//fuction flecha
/*const datosArreglo =() => {
    for (const datosIndex in array){
        for (const valoresIndex in array [datosIndex])
            console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
    }
}
datosArreglo();
*/
//while
/*const datosArreglo = () =>{
    let datosIndex = 0;
    while(datosIndex< array.length){
        let valoresIndex =0;
     while (valoresIndex<array[datosIndex].length){
        console.log(`${valoresIndex}=${array[datosIndex][valoresIndex]}`);
        valoresIndex++;
     }
     datosIndex++;
    }
}
datosArreglo();
*/
//for each
const datosArreglo= () => {
    array.forEach((subArray, datosIndex)=> {
    subArray.forEach((valor, valoresIndex)=>{
        console.log(`${valoresIndex}=${valor}`);
    });
});
}
datosArreglo();

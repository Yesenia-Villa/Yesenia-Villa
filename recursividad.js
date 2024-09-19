

/* function fibo(n){
    let arreglo = [0,1];
    for (let i=2; i<n; i++){
        arreglo [i]= arreglo[i-1] +arreglo[i-2];
       
    } 
    return arreglo;


}
 console.log(fibo(6));
 */
/*  function fibio(n){
 let inicial = 0;
 let temporal = 1
 let actual = 0
 for(i =0; i<n;i++) {
     inicial=temporal
    temporal=actual
    actual =inicial+temporal
    console.log(actual)
 }

 }
 fibio(n);
 */
 const prompt = require("prompt-sync")();
 function fibo (n){
    if (n<2)return n;
    return fibo (n-1)+fibo(n-2)}
const n= parseInt(prompt("ingrese cuantas veces quiere que se repita la secuencia"))
for(let i= 0; i<n; i++){
    console.log(fibo(i))
}
 

  
    


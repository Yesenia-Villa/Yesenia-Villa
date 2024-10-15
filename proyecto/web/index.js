const formDatos=document.getElementById("datos");
let datoArr  =[];
formDatos.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    
    const nombre = document.getElementById("Nombre").value;
    const edad=document.getElementById("Edad").value;
    const sexo=document.getElementById("sexo").value;
    const rfc=document.getElementById("Rfc").value;
    
    let info={nombre:nombre, edad:edad, sexo:sexo, rfc:rfc};
let infJSON=JSON.stringify(info);

fetch("http://localhost:3001/guardar",{
method:"POST",
headers:{"Content-Type":"application/json"}
,
body:infJSON
})
    //datoArr.push(info);
    console.log(infJSON);
});

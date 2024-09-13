const prompt = require("prompt-sync")();

class Compra {
    constructor(){
        this._clientes=[];
        this._peliculas =[];
        this._rentas= [];
    }

agregacliente (){
    let nombre=prompt("agregar el nombre del cliente");
    let direc =prompt("agrega la direccion del cliente");
    let telefono = prompt("agrega el num de telefono del cliente");
    let menbrenum = prompt("agrega el numero de menbresia");
    let estacliente = prompt("agrega si el cliente esta activo o no");
   
    let cliente = {
        nombre:nombre,
        direc:direc,
        telefono:telefono,
        menbrenum:menbrenum,
        estacliente:estacliente=== `si` ?"libre de multa":"deudor"
    };
    this._clientes.push(cliente);
}
mostrarcliente(){
   if ( this._clientes.length>0) {
    this._clientes.map((cliente)=>{
console.log(`el nombre del cliente: ${cliente.nombre}, y tiene una menbresia: ${cliente.menbrenum},estado: ${cliente.estacliente}`);
});
    } else  {
    console.log("no hay clientes registrados.");
    }

}

  eliminarcliente() {
    if (this._clientes.length > 0) {
        let menbrenum = prompt("menbrecia del cliente que desea eliminar");
     this._clientes= this._clientes.filter(cliente => cliente .menbrenum !== menbrenum );
     console.log(`cliente con membresia ${menbrenum} eliminado.`);
    } else {
        console.log("no hay clientes registrados");
    }
    }
    
    agrepeli(){
        let numpelicula = prompt("numero de peli:");
        let titulo = prompt("titulo:");
        let clasificacion = prompt("clasificacion:");
        let estado = prompt("estado (disponible/rentada):");
        let tipo = prompt("ripo (catalago/estreno):");
       
        let pelicula ={
            numpelicula: numpelicula,
            titulo:titulo,
            clasificacion:clasificacion,
            estado:estado,
            tipo:tipo,
        };
        this._peliculas.push(pelicula);
    }

    mostrarpeli(){
if(this._peliculas.length >0){
    this._peliculas.map((pelicula) =>{
        console.log(`pelicula: ${pelicula.titulo}, numero: ${pelicula.numpelicula}, estado: ${pelicula.estado}`);
    });
} else {
    console.log("no hay peliculas registradas.");
    }
}

eliminarpeli(){
    if(this._peliculas.length >0){
        let numpelicula =prompt("numero de pelicula que desea eliminar:");
        this._peliculas=this._peliculas.filter(pelicula =>pelicula.numpelicula !== numpelicula);
        console.log(`peliculas con numero ${numpelicula} eliminada`);
    } else {
        console.log("no hay peli registradas para poder eliminar.");
    }
}
 rentapeli(){
    let menbrenum=prompt("num de menbrecia cliente:");
    let cliente =this._clientes.find(c => c.menbrenum === menbrenum);
    
    if (cliente && cliente.estacliente === "libre de multa"){
        let numpelicula = prompt("numero de pelicula que desea rentar:");
        let pelicula = this._peliculas.find(p =>p.numpelicula === numpelicula);

        if (pelicula && pelicula.estado === "disponible"){
            pelicula.estado = "rentada";
            let fecharenta = new Date();
            let fechadevolucion = new Date(fecharenta);
            fechadevolucion.setDate(fecharenta.getDate()+3);

            let costorenta = pelicula.telefono === "estreno"?50.00:35.00;
            let renta = {
                cliente: cliente.nombre,
                pelicula:pelicula. titulo,
                fecharenta: fecharenta.toLocaleDateString(),
                fechadevolucion: fechadevolucion.toLocaleDateString()
            };

            this._rentas.push(renta);
            console.log( `pelicula rentasa a ${cliente.nombre}. debe devolverse antes de ${renta.fechadevolucion} `);
    
} else {
                console.log(" pelicula no disponible");
        }
    } else {
        console.log("el cliente no esta registrado o tiene multas pendientes.");
    }
 }

    mostrarentas() {
 if(this._rentas.length > 0) {
this._rentas.map((renta) =>{
    console.log(`pelicula :${renta.pelicula}, rentada por :${renta.cliente}, fecha de devolucion: ${renta.fechadevolucion}`);
});
 
} else{
    console.log("no hay rentas registradas");
}
}

 
menulista (){
    let listar = parseInt(prompt("que desea hacer 1.agregar cliente, 2. mostrar clientes, 3. eliminar cliente, 4. agregar pelicula,5. mostrar peliculas. 6. eliminar pelicula, 7. rentar pelicula, 8. mostrar rectas, 9.salir:"));
  while (listar !=9){
    switch(listar){
        case 1:
            this.agregacliente();
            break;
        case 2:
            this.mostrarcliente();
            break;
         case 3:
            this.eliminarcliente();
            break;
         case 4:
             this.agrepeli();
             break;
         case 5:
            this.mostrarpeli();
            break;
        case 6:
            this.eliminarpeli();
            break;
        case 7:
            this.rentapeli();
            break;
        case 8:
            this.mostrarentas();
            break;
        case 9:
            break;
    }
    listar = parseInt(prompt("que desea hacer 1.agregar cliente, 2. mostrar clientes, 3. eliminar cliente, 4. agregar pelicula,5. mostrar peliculas. 6. eliminar pelicula, 7. rentar pelicula, 8. mostrar rectas, 9.salir:;"));

  }
}
}
let agregacliente =new Compra();
agregacliente.menulista();


//es lo que pude hacer profe , creo que no esta del todo bien pero casi 
//no le entiedo profe y es lo que mas omenos entendi y intente realizar
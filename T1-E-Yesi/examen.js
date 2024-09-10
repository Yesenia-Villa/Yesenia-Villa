
    //Yesenia villa mateo
    const prompt=require(`prompt-sync`)();
   
    class Empleados{
        constructor(nombre,apellido,edad,rfc,direccion,telefono,sueldo){
            this._nombre =nombre;
            this._apellido=apellido;
            this._edad=edad;
            this._rfc=rfc;
            this._direccion=direccion;
            this._telefono=telefono;
            this._sueldo= sueldo;
        }
        get nombre(){
            return  this._nombre
        }
        set nombre(value){
            this._nombre=value
        }
        get apellido(){
            return  this._apellido
        }
        set apellido(value){
            this._apellido=value
        }
        get edad(){
            return  this._edad
        }
        set edad(value){
            this._edad=value
        }
        get rfc(){
            return  this._rfc
        }
        set rfc(value){
            this._rfc=value
        }
        get direccion(){
            return  this._direccion
        }
        set direccion(value){
            this._direccion=value
        }
        get telefono(){
            return  this._telefono
        }
        set telefono(value){
            this._telefono=value
        }
        get sueldo(){
            return  this._sueldo
        }
        set sueldo(value){
            this._sueldo=value
        }
        calcularsueldo(){
            return this._sueldo * 0.15
        }
    }
    let arreglo =[];
    
    function añadir(){
        let tamaño = parseInt(prompt("ingresa el numero de empleados a agregar"));
        for(let i=0;i<tamaño; i++){
            let nombre=(prompt("ingresa el nombre del empleado"));
            let apellido=(prompt("ingresa el apellido"));
            let edad=(prompt("ingresa la edad"));
            let rfc =(prompt("ingresa el rfc"));
            let direccion=(prompt("ingresa la direccion"));
            let telefono=(prompt("ingresa el telefono"));
            let sueldo =(parseFloat(prompt("ingresa el sueldo del empleado")));
        
        let empleado = new Empleados (nombre,apellido,edad,rfc,direccion,telefono,sueldo);
        arreglo.push(empleado);

        let sueldobono = empleado .calcularsueldo();
        console.log (`sueldo con bono del empleado ${nombre}: ${sueldobono}`);

        let sueldototal =  sueldobono  + parseInt(sueldo);
        console.log(`sueldo total del empleado ${nombre}: ${sueldototal}`);
}
}
      function eliminarultimoempleado (){
            if(arreglo.length>0){
                arreglo.pop();
                console.log(`se elimina el ultimo empleado`);
                } else{
                    console.log(`no hay empleados para eliminar`);
            }
        }
    
    añadir();
    eliminarultimoempleado();
    console.log(arreglo);
    
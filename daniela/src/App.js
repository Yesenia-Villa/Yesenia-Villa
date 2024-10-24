import React from "react";
import "./App.css";

//import Formulariocss from "./Formulariocss";
//import Formularioboot from "./components/Formularioboot";

import Estados from "./components/Estados";
import Menu from "./components/inicio/Menu";
import ViewCalificaciones from "./components/Calificaciones/ViewCalificaciones";


function App() {
//const variable1=5;
//const variable2=5;
return (
  <div className="container-fluid">
   <Menu/>
   <Estados/>
<ViewCalificaciones/>
    </div>
  );
}
export default App;
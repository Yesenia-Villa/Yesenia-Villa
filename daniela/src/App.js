import React from "react";
import "./App.css";


import Menu from "./components/inicio/Menu";
import { BrowserRouter  as Router } from "react-router-dom";
import Rutas from "./routes/Rutas";

function App() {
return (
  <Router>
  <div className="container-fluid">
   <Menu/>
   <Rutas/>
  
    </div>
    </Router>
  );
}
export default App;

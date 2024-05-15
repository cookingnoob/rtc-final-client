import { useRef, useState } from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

//COMPONENTES
//navbar
//liga de login
//liga de signup
//
//main page
//formularios
//componente input password
//componente input correo
//componente input usuername
//boton enviar login
//boton enviar signup
//input nuevo todo descripcion
//acordeon con inputs de notas, date
//boton para cambiar done al to-do
//boton para eliminar el todo
//boton para agregar nueva lista


function App() {

  return (
    <>
      {/* <SignUp /> */}
      <LogIn />
    </>
  );
}

export default App;

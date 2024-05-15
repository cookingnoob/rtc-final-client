import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
//login
//sign up
//mostrar to-dos globales
//mostrar todos de usuario
//editar usuario


function App() {

  return (
    <>
      <header>
        <h1>To-do</h1>
      </header>
      <nav>
        <NavLink to="signup">Reigstrate</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to='shared-lists'>Listas compartidas</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>By Alan Coste</footer>
    </>
  );
}

export default App;

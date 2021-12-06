import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';


const isUser = localStorage.getItem('token');

function Logout(){
  localStorage.removeItem('token')
  window.location.replace("/login");
}



let sesionOn = '';
  if(isUser!==null){
      sesionOn= 
      <>
      <ul className="navbar-nav me-auto">
      <DropdownButton id="dropdown-basic-button" title="Usuario">
        <Dropdown.Item href="/encuestas">Encuestas</Dropdown.Item>
        <Dropdown.Item href="/secciones">Secciones</Dropdown.Item>
        <Dropdown.Item href="/preguntas">Preguntas</Dropdown.Item>
      </DropdownButton>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
        <IconButton onClick={Logout} aria-label="delete">
          <LogoutIcon color="primary" fontSize="inherit" />
        </IconButton>
        </li>
      </ul>
      </>
  }

  let sesionOff = '';
  if(isUser==null){
      sesionOff= 
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios/crear">Registrarse</Link>
        </li>
      </ul>
  }

export const Navbar = () => (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      {sesionOn}
      {sesionOff}
    </div>
  </div>
</nav>
)
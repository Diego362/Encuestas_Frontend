import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const CrearUsuario = () => {


    const guardarUsuario = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const data = {
          Nombre: form.nombres.value,
          Correo: form.correo.value,
          Contraseña: form.contraseña.value,
        };
        axios.post(URL_SERVIDOR +"/usuarios", data).then((response) => {
          window.location.replace("/");
        });
      };

    return(
        <div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={guardarUsuario} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre" name="nombres"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="correo" name="correo"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="contraseña" name="contraseña"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-primary btn-block"> Guardar </button>
                </form>
              </div>
            </div>
            <Link className="btn btn-dark" to="/"> Regresar </Link>
        </div>
    )
}
import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const CrearEncuesta = () => {


    function getUsuarios() {
      return axios.get(URL_SERVIDOR+"/usuarios",{
        headers:{
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      });
  }

    const guardarEncuesta = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const data = {
          Nombre: form.nombres.value,
          id_usuario: form.id_usuario.value,
        };
        axios.post(URL_SERVIDOR +"/encuestas", data).then((response) => {
        window.location.replace("/encuestas");
        });
      };


      const [usuarios, setUsuarios] = useState([]);
      useEffect(() => {
      getUsuarios().then((response) => {
      setUsuarios(response.data)
  });
  }, []);

    return(
        <div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={guardarEncuesta} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la encuesta" name="nombres"/>
                    <select className ="form-select" name="id_usuario">
                      {usuarios.map((usuario)=>{
                        return(
                          <option key={usuario.id_usuario} value={usuario.id_usuario}>
                            {usuario.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-primary btn-block"> Guardar </button>
                </form>
              </div>
            </div>
            <Link className="btn btn-dark" to="/encuestas"> Regresar </Link>
        </div>
    )
}
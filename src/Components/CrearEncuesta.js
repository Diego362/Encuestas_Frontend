import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const CrearEncuesta = () => {


    function getUsuarios() {
      return axios.get("http://localhost:5000/usuarios",{
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
          id_usuario: form.usuario_id.value,
        };
        axios.post("http://localhost:5000/encuestas", data).then((response) => {
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
                          <option key={usuario.id} value={usuario.id}>
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
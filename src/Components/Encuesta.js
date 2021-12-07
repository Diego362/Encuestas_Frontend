import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const Encuesta = () => {

    function getEncuestas() {
        return axios.get(URL_SERVIDOR+"/encuestas",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
        
    }

    function borrarEncuesta(id){
      const respuestaUsuario = window.confirm('¿Seguro de que quiere eliminar esta encuesta?')
      if (respuestaUsuario) {
        axios.delete(URL_SERVIDOR+'/encuestas/'+id).then(response => {
          window.location.replace("/encuestas");
        })
      }
    }

    function idEncuesta(encuesta){
      return(
        window.location.replace("/encuestas/"+encuesta.id_encuesta)
      );
    }

    const [encuestas, setEncuestas] = useState([]);
        useEffect(() => {
        getEncuestas().then((response) => {
        setEncuestas(response.data);
    });
    }, []);


    return(
        <div>
            <Link className="btn btn-dark" to="encuestas/crear"> Crear encuesta </Link>
            <center className="h1" >Encuestas</center>
            <div className="col md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>id_usuario</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.id_encuesta}>
                    <td>{encuesta.nombre}</td> 
                    <td>{encuesta.id_usuario}</td> 
                    <td>
                      <button className="btn btn-outline-info btn-sm"
                              onClick={() => idEncuesta(encuesta)}> 
                        Editar 
                      </button>
                      <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => borrarEncuesta(encuesta.id_encuesta)}> 
                        Borrar 
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            <Link className="btn btn-dark" to="/"> Regresar </Link>
        </div>
    )
}
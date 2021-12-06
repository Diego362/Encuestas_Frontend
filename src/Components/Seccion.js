import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const Seccion = () => {

    function getSecciones() {
        return axios.get(URL_SERVIDOR +"/secciones",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
        
    }

    function idSeccion(seccion){
      return(
        window.location.replace(URL_SERVIDOR +"/secciones/"+seccion.id_seccion)
      );
    }

    function borrarSeccion(id){
      const respuestaUsuario = window.confirm('¿Seguro de que quiere eliminar esta seccion?')
        if(respuestaUsuario){
          axios.delete(URL_SERVIDOR +'/secciones/'+id).then(response => {
          window.location.replace("/secciones");
      })
        }
    }
    const [secciones, setSecciones] = useState([]);
        useEffect(() => {
        getSecciones().then((response) => {
        setSecciones(response.data);
    });
    }, []);

    return(
        <div>            
            <Link className="btn btn-dark" to="/secciones/crear"> Crear Seccion </Link>
            <center className="h1" >Secciones</center>
            <div className="col md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>id_encuesta</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                {secciones.map((seccion) => (
                  <tr key={seccion.id_seccion}>
                    <td>{seccion.nombre}</td> 
                    <td>{seccion.id_encuesta}</td> 
                    <td>
                      <button className="btn btn-outline-info btn-sm"
                              onClick={() => idSeccion(seccion)}> 
                        Editar 
                      </button>
                      <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => borrarSeccion(seccion.id_seccion)}> 
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
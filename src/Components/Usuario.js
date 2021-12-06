import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const Usuario = () => {

    

    function getUsuarios() {
        return axios.get(URL_SERVIDOR +"/usuarios",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
    }

    function borrarUsuario(id){
      const respuestaUsuario = window.confirm('¿Seguro de que quiere eliminar este usuario?')
      if (respuestaUsuario){
        axios.delete(URL_SERVIDOR +'/usuarios/'+id).then(response => {
        window.location.replace(URL_SERVIDOR +"/usuarios");
      })
      }
    }

    function idUsuario(usuario){
      return(
        window.location.replace(URL_SERVIDOR+"/usuarios/"+usuario.id_usuario)
      );
    }

    const [usuarios, setUsuarios] = useState([]);
        useEffect(() => {
        getUsuarios().then((response) => {
        setUsuarios(response.data)
    });
    }, []);


    return(
        <div>
            <center className="h1" >Usuarios</center>
            <div className="col md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id_usuario}>
                    <td>{usuario.nombre}</td> 
                    <td>{usuario.correo}</td> 
                    <td>
                      <button 
                      className="btn btn-outline-info btn-sm"
                      onClick={() => idUsuario(usuario)}> 
                        Editar 
                      </button>
                      <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => borrarUsuario(usuario.id_usuario)}> 
                        Eliminar 
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
import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const EditarUsuario = () => {

    const[usuario, setUsuarios] = useState([]);
    const{id_usuario} = useParams();   
    console.log(usuario)



    useEffect(() => {
        axios.get(URL_SERVIDOR +"/usuarios/"+id_usuario).then((response)=>{
            setUsuarios(response.data);
        })
    }, [id_usuario]);

    const actualizarUsuario = (event) =>{
        event.preventDefault();

        const form = event.target;
        const data = {
            Nombre: form.nombres.value,
            Correo: form.correo.value,
            Contraseña: form.contraseña.value,
        };

        axios.put(URL_SERVIDOR +'/usuarios/'+id_usuario, data).then((response)=>{
            window.location.replace(URL_SERVIDOR +'/usuarios');
        });
        
    }

    return (
        <div>
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={actualizarUsuario} className="card card-body">
                  <div className="form-group">
                    <input type="text" 
                           className="form-control" 
                           placeholder="Nombre" 
                           name="nombres"
                           />
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="email" 
                           className="form-control" 
                           placeholder="Correo" 
                           name="correo"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="password" 
                           className="form-control" 
                           placeholder="Contraseña" 
                           name="contraseña"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-success btn-block"> Actualizar </button>
                  <br/>
                  <Link className="btn btn-dark" to="/usuarios"> Regresar </Link>
                </form>
              </div>
            </div>
            <br/>
        </div>
    );


}
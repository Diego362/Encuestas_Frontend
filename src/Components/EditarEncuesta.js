import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const EditarEncuesta = () => {

    const[encuesta, setEncuestas] = useState([]);
    const{id_encuesta} = useParams();   
    console.log(encuesta);


    useEffect(() => {
        axios.get(URL_SERVIDOR +"/encuestas/"+id_encuesta).then((response)=>{
            setEncuestas(response.data);
            console.log(id_encuesta)
        })
    }, [id_encuesta]);

    const actualizarEncuesta = (event) =>{
        event.preventDefault();

        const form = event.target;
        const data = {
            Nombre: form.nombres.value,
            id_usuario: form.id_usuario.value,

        };

        axios.put(URL_SERVIDOR +'/encuestas/'+id_encuesta, data).then((response)=>{
            window.location.replace('/encuestas');
        });
        
    }

    return (
        <div>
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={actualizarEncuesta} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la encuesta" name="nombres"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="ID del usuario" name="id_usuario"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-success btn-block"> Actualizar </button>
                  <br/>
                  <Link className="btn btn-dark" to="/encuestas"> Regresar </Link>
                </form>
              </div>
            </div>
            <br/>
        </div>
    );


}
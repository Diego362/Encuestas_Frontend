import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const EditarSeccion = () => {

    const[seccion, setSecciones] = useState([]);
    const{id_seccion} = useParams();   
    console.log(seccion);


    useEffect(() => {
        axios.get(URL_SERVIDOR +"/secciones/"+id_seccion).then((response)=>{
            setSecciones(response.data);
            console.log(id_seccion)
        })
    }, [id_seccion]);

    const actualizarSeccion = (event) =>{
        event.preventDefault();

        const form = event.target;
        const data = {
            Nombre: form.nombres.value,
            id_encuesta: form.id_encuesta.value,

        };

        axios.put(URL_SERVIDOR +'/secciones/'+id_seccion, data).then((response)=>{
            window.location.replace(URL_SERVIDOR +'/secciones');
        });
        
    }

    return (
        <div>
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={actualizarSeccion} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la seccion" name="nombres"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="ID de la encuesta" name="id_encuesta"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-success btn-block"> Actualizar </button>
                  <br/>
                  <Link className="btn btn-dark" to="/secciones"> Regresar </Link>
                </form>
              </div>
            </div>
            <br/>
        </div>
    );


}
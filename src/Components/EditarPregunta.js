import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import URL_SERVIDOR from "../constantes";

export const EditarPregunta = () => {

    const[pregunta, setPreguntas] = useState([]);
    const{id_pregunta} = useParams();   
    console.log(pregunta);


    useEffect(() => {
        axios.get(URL_SERVIDOR +"/preguntas/"+id_pregunta).then((response)=>{
            setPreguntas(response.data);
            console.log(id_pregunta)
        })
    }, [id_pregunta]);

    const actualizarPregunta = (event) =>{
        event.preventDefault();

        const form = event.target;
        const data = {
            Nombre: form.nombres.value,
            id_seccion: form.id_seccion.value,
            id_tipopregunta: form.id_tipopregunta.value,

        };

        axios.put(URL_SERVIDOR +'/preguntas/'+id_pregunta, data).then((response)=>{
            window.location.replace('/preguntas');
        });
        
    }

    return (
        <div>
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={actualizarPregunta} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la seccion" name="nombres"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="ID de la seccion" name="id_seccion"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="ID del tipo de pregunta" name="id_tipopregunta"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-success btn-block"> Actualizar </button>
                  <br/>
                  <Link className="btn btn-dark" to="/preguntas"> Regresar </Link>
                </form>
              </div>
            </div>
            <br/>
        </div>
    );


}
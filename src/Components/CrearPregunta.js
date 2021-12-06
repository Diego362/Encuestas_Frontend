import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CrearPregunta = () => {

    function getSecciones() {
        return axios.get(URL_SERVIDOR +"/secciones",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
    }

    const guardarPregunta = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const data = {
          Nombre: form.nombres.value,
          id_seccion: form.id_seccion.value,
          id_tipopregunta: form.id_tipopregunta.value,
        };
        axios.post(URL_SERVIDOR +"/preguntas", data).then((response) => {
          window.location.replace("/preguntas");
        });
      };

    const [secciones, setSecciones] = useState([]);
        useEffect(() => {
        getSecciones().then((response) => {
        setSecciones(response.data);
    });
     }, []);


    return(
        <div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={guardarPregunta} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la pregunta" name="nombres"/>
                    <select class ="form-select" name="id_seccion">
                      {secciones.map((seccion)=>{
                        return(
                          <option key={seccion.id_seccion} value={seccion.id_seccion}>
                            {seccion.nombre}
                          </option>
                        );
                      })}
                    </select>
                    <input type="text" className="form-control" placeholder="ID del tipo de pregunta" name="id_tipopregunta"/>
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
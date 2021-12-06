import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CrearSeccion = () => {

    function getEncuestas() {
        return axios.get("http://localhost:5000/encuestas",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
    }
    
    const guardarSeccion = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const data = {
          Nombre: form.nombres.value,
          id_encuesta: form.id_encuesta.value,
        };
        axios.post("http://localhost:5000/secciones", data).then((response) => {
          window.location.replace("/secciones");
        });
      };

    const [encuestas, setEncuestas] = useState([]);
        useEffect(() => {
        getEncuestas().then((response) => {
        setEncuestas(response.data);
    });
    }, []);

    return(
        <div>            
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={guardarSeccion} className="card card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre de la seccion" name="nombres"/>
                    <select class ="form-select" name="id_encuesta">
                      {encuestas.map((encuesta)=>{
                        return(
                          <option key={encuesta.id_encuesta} value={encuesta.id_encuesta}>
                            {encuesta.nombre}
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
            <Link className="btn btn-dark" to="/secciones"> Regresar </Link>
        </div>
    )
}
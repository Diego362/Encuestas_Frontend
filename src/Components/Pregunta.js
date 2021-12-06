import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Pregunta = () => {

    function getPreguntas() {
        return axios.get(URL_SERVIDOR +"/preguntas",{
          headers:{
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        });
    }

    function idPregunta(pregunta){
      return(
        window.location.replace(URL_SERVIDOR +"/preguntas/"+pregunta.id_pregunta)
      );
    }
    
    function borrarPregunta(id){
      const respuestaUsuario = window.confirm('¿Seguro de que quiere eliminar esta pregunta?')
        if(respuestaUsuario){
          axios.delete(URL_SERVIDOR+'/preguntas/'+id).then(response => {
        window.location.replace(URL_SERVIDOR +"/preguntas");
      })
        }
    }


    const [preguntas, setPreguntas] = useState([]);
        useEffect(() => {
        getPreguntas().then((response) => {
        setPreguntas(response.data);
    });
     }, []);


    return(
        <div>
            <Link className="btn btn-dark" to="/preguntas/crear"> Crear Pregunta </Link>
            <center className="h1" >Preguntas</center>
            <div className="col md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>id_Seccion</th>
                    <th>id_Tipo_pregunta</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                {preguntas.map((pregunta) => (
                  <tr key={pregunta.id_pregunta}>
                    <td>{pregunta.nombre}</td> 
                    <td>{pregunta.id_seccion}</td> 
                    <td>{pregunta.id_tipopregunta}</td> 
                    <td>
                      <button className="btn btn-outline-info btn-sm"
                              onClick={() => idPregunta(pregunta)}> 
                        Editar 
                      </button>
                      <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => borrarPregunta(pregunta.id_pregunta)}> 
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
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import  Layout  from "./Layouts/Layout"; 
import Inicio from "./pages/Inicio.js"

import RutaPrivada from "./Components/RutaPrivada";

import { CrearUsuario } from "./Components/CrearUsuario";
import { Usuario } from "./Components/Usuario";
import { EditarUsuario } from "./Components/EditarUsuario";
import { Encuesta } from "./Components/Encuesta";
import { CrearEncuesta } from "./Components/CrearEncuesta";
import { EditarEncuesta } from "./Components/EditarEncuesta";
import { Seccion } from "./Components/Seccion";
import { CrearSeccion } from "./Components/CrearSeccion";
import { EditarSeccion } from "./Components/EditarSeccion";
import { Pregunta } from "./Components/Pregunta";
import { CrearPregunta } from "./Components/CrearPregunta";
import { EditarPregunta } from "./Components/EditarPregunta";

// funciones y hooks
function App() {
  return (
    <Router>
      <Layout>
        <div className="containe p-4">
          <Switch>
            <Route exact path="/">
            <Inicio/>
            </Route>
            <Route exact path="/login"><Login></Login></Route>
            <Route exact path="/usuarios/crear" component={CrearUsuario}></Route>
            <RutaPrivada exact path="/usuarios" component={Usuario}></RutaPrivada>
            <RutaPrivada exact path="/usuarios/:id_usuario" component={EditarUsuario}></RutaPrivada>
            <RutaPrivada exact path="/encuestas" component={Encuesta}></RutaPrivada>
            <RutaPrivada exact path="/encuestas/crear" component={CrearEncuesta}></RutaPrivada>
            <RutaPrivada exact path="/encuestas/:id_encuesta" component={EditarEncuesta}></RutaPrivada>
            <RutaPrivada exact path="/secciones" component={Seccion}></RutaPrivada>
            <RutaPrivada exact path="/secciones/crear" component={CrearSeccion}></RutaPrivada>
            <RutaPrivada exact path="/secciones/:id_seccion" component={EditarSeccion}></RutaPrivada>
            <RutaPrivada exact path="/preguntas" component={Pregunta}></RutaPrivada>
            <RutaPrivada exact path="/preguntas/crear" component={CrearPregunta}></RutaPrivada>
            <RutaPrivada exact path="/preguntas/:id_pregunta" component={EditarPregunta}></RutaPrivada>
          </Switch>
        </div>
      </Layout>
    </Router>
  );
}

export default App;

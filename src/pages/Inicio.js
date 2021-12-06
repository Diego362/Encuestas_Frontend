import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <Container>
            <Row className="App">
                <Col>
                <h2>BIENVENIDO</h2>
                <p>Aqui puedes crear tus propias encuestas y compartirlas con los demas</p>
                <p>¡vamos a empezar!</p>
                <div>
                    <Link className="App-link" to ="/login">Ingresa</Link> o <Link className="btn btn-dark" to="/usuarios/crear"> Crear cuenta </Link>
                </div>
                </Col>
            </Row>
        </Container>
    );
}


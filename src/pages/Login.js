import axios from "axios";

function Login(){

  const login = (event) => {
    event.preventDefault();

    const form = event.target;
    
        const data = {
          email: form.correo.value,
          password: form.contraseña.value,
        };
        axios.post("http://localhost:5000/login", data).then((response) => {
        localStorage.setItem('token', response.data.token) 
        });


  }
  return (
      <div className="row">
              <div className="col-md-4">
                <form onSubmit={login} className="card card-body">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="correo" name="correo"/>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="contraseña" name="contraseña"/>
                  </div>
                  <p></p>
                  <button type="submit" className="btn btn-primary btn-block"> Iniciar </button>
                </form>
              </div>
    </div>
  );

}
export default Login;

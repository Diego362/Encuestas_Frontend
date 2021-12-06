import { Redirect, Route } from "react-router";

export default function RutaPrivada(props){


    if(localStorage.getItem('token')==null) {
        return(
            <Redirect to ="/login"/>
        )
    }
    return(
        <Route {...props} />
    )

}
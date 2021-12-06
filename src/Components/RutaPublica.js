import { Redirect, Route } from "react-router";

export default function RutaPublica(props){


    if(localStorage.getItem('token') !== null) {
        return(
            <Redirect to ="/"/>
        )
    }
    return(
        <Route {...props} />
    )

}
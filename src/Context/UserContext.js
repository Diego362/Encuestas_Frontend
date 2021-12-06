import React, {useState} from "react";

const Context = React.createContext({})

export function UserContextProvider ({childen}) {
    const {jwt, setJWT} = useState({})

    return <Context.Provider value = {{jwt, setJWT}}>
        {childen}
        </Context.Provider>
}

export default Context
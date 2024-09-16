import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [auth,setAuth] = useState({
        user : null
    })

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('userlogin'));
        if(data){
            setAuth({
                ...auth,
                user : data
            })
        }
    },[])
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)
export {useAuth,AuthProvider}
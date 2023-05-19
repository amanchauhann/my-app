import { createContext, useContext, useState } from "react";
import { LoginService } from "../Services";
import { useNavigate } from "react-router";
import { ContextData } from "./data-context";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const {userFromLocation} = useContext(ContextData)
    console.log(userFromLocation)
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState({status: "", message: ""})

    const loginHandler = async(email, password) => {
            const {data, ResStatus} = await (LoginService(email, password))
            if(ResStatus !== 200){
                setLoginError({status: ResStatus, message: data.errors[0]})
            }

            const encodedToken = await data.encodedToken
            localStorage.setItem('userDetails', JSON.stringify({encodedToken: encodedToken, user: data.foundUser}));

            encodedToken && navigate(userFromLocation ?? "/")
    }
    return(
        <AuthContext.Provider value={{loginHandler, loginError}}>
            {children}
        </AuthContext.Provider>
    )
}
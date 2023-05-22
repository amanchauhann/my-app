import { createContext, useContext, useState } from "react";
import { LoginService, SignupService } from "../Services";
import { useNavigate } from "react-router";
import { ContextData } from "./data-context";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const {userFromLocation} = useContext(ContextData)
    console.log(userFromLocation)
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState({status: "", message: ""})
    const [signupError, setSignupError] = useState({status: "", message: ""})

    const loginHandler = async(email, password) => {
            const {data, ResStatus} = await (LoginService(email, password))
            if(ResStatus !== 200){
                setLoginError({status: ResStatus, message: data.errors[0]})
            }

            const encodedToken = await data.encodedToken
            localStorage.setItem('userDetails', JSON.stringify({encodedToken: encodedToken, user: data.foundUser}));

            encodedToken && navigate(userFromLocation ?? "/")
    }

    const signupHandler = async(email, password, name) => {
        const {data, status} = await (SignupService(email, password, name))
        const encodedToken = await data.encodedToken
        if(status !== 201){
            setSignupError({status: status, message: data.errors[0]})
        }
            localStorage.setItem('userDetails', JSON.stringify({encodedToken: encodedToken, user: data.createdUser}));
            encodedToken && navigate(userFromLocation ?? "/")
    }
    return(
        <AuthContext.Provider value={{loginHandler, setLoginError, loginError, signupHandler,setSignupError, signupError}}>
            {children}
        </AuthContext.Provider>
    )
}
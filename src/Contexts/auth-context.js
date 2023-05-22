import { createContext, useContext, useEffect, useState } from "react";
import { LoginService, SignupService } from "../Services";
import { useNavigate } from "react-router";
import { ContextData } from "./data-context";
import { toast } from "react-toastify";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const userDetail_local_storage = JSON.parse(localStorage.getItem('userDetails'));
    // console.log("initial", userDetail_local_storage)
    const [auth_token, setAuth_Token] = useState(userDetail_local_storage?.encodedToken)
    const [logged_user, setLogged_User] = useState(userDetail_local_storage?.user);
    const [initialAddress, setInitialAddress] = useState([{
        street: '8505 Christina Ridges',
        alternatemobile: 4878794411,
        city: 'West Cooper',
        id: '2364c34d-7645-49cb-8b74-4bc5cb09711d',
        mobile: 1293452481,
        name: 'Vicki McDermott',
        pincode: '820598',
        state: 'Arunachal Pradesh',
    }])
    const [address, setAddress] = useState(logged_user?.address && logged_user?.address)
    const { userFromLocation } = useContext(ContextData)
    console.log("pp", address)
    // console.log(userFromLocation)
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState({ status: "", message: "" })
    const [signupError, setSignupError] = useState({ status: "", message: "" })

    const loginHandler = async (email, password) => {
        const { data, ResStatus } = await (LoginService(email, password))
        if (ResStatus !== 200) {
            setLoginError({ status: ResStatus, message: data.errors[0] })
        }

        const encodedToken = await data.encodedToken
        const userData = { ...data.foundUser, address: initialAddress }
        setAddress(initialAddress)

        { encodedToken && localStorage.setItem('userDetails', JSON.stringify({ encodedToken: encodedToken, user: userData })) }
        setAuth_Token(encodedToken)
        setLogged_User(userData)
        encodedToken && navigate(userFromLocation ?? "/")
        // const encodedToken = await data.encodedToken

        // const encodedToken = await data.encodedToken
        // localStorage.setItem('userDetails', JSON.stringify({ encodedToken: encodedToken, user: data.foundUser }));
        toast.success('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            progress: undefined,
            theme: "colored",
        });
        console.log("just for you", userData)
        // encodedToken && navigate(userFromLocation ?? "/")
    }

    const signupHandler = async (email, password, name) => {
        const { data, status } = await (SignupService(email, password, name))
        const encodedToken = await data.encodedToken

        if (status !== 201) {
            setSignupError({ status: status, message: data.errors[0] })
        }
        const userData = { ...data.createdUser, address: initialAddress }
        setAddress(initialAddress)
        { encodedToken && localStorage.setItem('userDetails', JSON.stringify({ encodedToken: encodedToken, user: userData })) };
        setAuth_Token(encodedToken)
        setLogged_User(userData)
        encodedToken && navigate(userFromLocation ?? "/")
    }
    useEffect(() => {
        if (address !== undefined && auth_token) {
            const DataWithNewAddress = { ...logged_user, address: address }
            localStorage.setItem('userDetails', JSON.stringify({ encodedToken: auth_token, user: DataWithNewAddress }))
            setLogged_User(DataWithNewAddress)
        }

    }, [address])

    // useEffect(()=>{
    //     const DataUpdatedAddress = {...userDetail_local_storage, address: address}
    //     localStorage.setItem('userDetails', JSON.stringify(DataUpdatedAddress))
    //     setLogged_User(DataUpdatedAddress)
    // }, [address])

    const delete_handler = (i) => {
        const DataUpdatedAddresss = { ...logged_user, address: address.filter(({ id }) => id !== i) }
        setAddress(address.filter(({ id }) => id !== i))
        localStorage.setItem('userDetails', JSON.stringify({ encodedToken: auth_token, user: DataUpdatedAddresss }))
        setLogged_User(DataUpdatedAddresss)
    }

    const update_handler = (i) => {

    }

    const logout_handler = () => {
        localStorage.removeItem('userDetails');
        setAuth_Token(null);
        setLogged_User(null);
    }
    return (
        <AuthContext.Provider value={{ loginHandler, setLoginError, loginError, signupHandler, setSignupError, signupError, auth_token, logged_user, setAddress, delete_handler, update_handler, logout_handler, address }}>
            {children}
        </AuthContext.Provider>
    )
}
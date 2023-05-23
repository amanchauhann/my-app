import { createContext, useContext, useEffect, useState } from "react";
import { LoginService, SignupService, wishlistDeleteService, wishlistService } from "../Services";
import { useNavigate } from "react-router";
import { ContextData } from "./data-context";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../Extra";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const userDetail_local_storage = JSON.parse(localStorage.getItem('userDetails'));
    // console.log("initial", userDetail_local_storage)
    const [auth_token, setAuth_Token] = useState(userDetail_local_storage?.encodedToken)
    const [logged_user, setLogged_User] = useState(userDetail_local_storage?.user);
    const [wishlistData, setWishlistData] = useState(logged_user?.wishlist || logged_user?.wishlist || [])
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
    const { userFromLocation, prod } = useContext(ContextData)
    console.log("pp", address)
    // console.log(userFromLocation)
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState({ status: "", message: "" })
    const [signupError, setSignupError] = useState({ status: "", message: "" })
    const [wishlistError, setWishlistError] = useState("")

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
        encodedToken && successToast("Successfully logged in")
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

    const wishListHandler = async (product) => {
        const { get_wishlist, status } = await (wishlistService(auth_token, product))
        if (status !== 201) {
            setWishlistError(status, get_wishlist.errors[0])
        }
        const data_with_update_wishlist = { ...logged_user, wishlist: [product, ...logged_user.wishlist] }
        // console.log(wishlist)
        setLogged_User(data_with_update_wishlist)
        setWishlistData(get_wishlist)
        localStorage.setItem('userDetails', JSON.stringify({ encodedToken: auth_token, user: data_with_update_wishlist }))
        if (status === 201) {
            successToast(`${product.title} has been added to wishlist.`)
        }

    }

    const removeWishlistHandler = async (i) => {
        const { get_wishlist_deletion, status } = await wishlistDeleteService(auth_token, i)

        const DataUpdatedWishlist = await { ...logged_user, wishlist: get_wishlist_deletion }
        if (status === 200) {
            errorToast("Product removed from wishlist")
        }
        setLogged_User(DataUpdatedWishlist)
        setWishlistData(get_wishlist_deletion)
        localStorage.setItem('userDetails', JSON.stringify({ encodedToken: auth_token, user: DataUpdatedWishlist }))
        // console.log("aaaaaaaaaa", i)
        // const DataUpdatedWishlist = { ...logged_user, wishlist: logged_user?.wishlist.filter(({ _id }) => _id !== i) }
        // localStorage.setItem('userDetails', JSON.stringify({ encodedToken: auth_token, user: DataUpdatedWishlist }))
        // setLogged_User(DataUpdatedWishlist)

    }
    return (
        <AuthContext.Provider value={{ loginHandler, setLoginError, loginError, signupHandler, setSignupError, signupError, auth_token, logged_user, setAddress, delete_handler, update_handler, logout_handler, address, wishListHandler, wishlistData, removeWishlistHandler }}>
            {children}
        </AuthContext.Provider>
    )
}
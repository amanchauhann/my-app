import { Link } from "react-router-dom"
import "../Auth.css"
import { useContext, useState } from "react"
import { users } from "../../../backend/db/users"
import { AuthContext } from "../../../index"

const Login = () => {
    const { loginHandler, loginError, setLoginError } = useContext(AuthContext)
    // storing value of test user
    const existingLoginForm = {
        email: users[0].email,
        password: users[0].password
    }

    // state for storing login details(email, password)
    const [loginform, setLoginForm] = useState({
        email: "",
        password: ""
    })

    //Upon clicking "login as guest", it sets loginUserDetails as existingUser
    const loginAsGuestHandler = (e) => {
        e.preventDefault();
        setLoginForm(existingLoginForm)
    }

    //setting login User email
    const login_email_handler = (e) => {
        const enteredEmail = e.target.value

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(enteredEmail);

        //if user has started writing, otherwise(border: grey), if yes, check if Email is valid(border: green), otherwise(border:red)
        e.target.setAttribute("style", `border: ${enteredEmail.length > 3 ? isValidEmail ? "2px solid green" : "2px solid red" : "1px solid grey"}`)

        //set email in login form.
        setLoginForm({ ...loginform, email: e.target.value })
        //if there was error earlier and user is now fixing it, then remove the error status and message.
        setLoginError({ status: "", message: "" })
    }

    const login_password_handler = (e) => {
        setLoginForm({ ...loginform, password: e.target.value })
        setLoginError({ status: "", message: "" })
    }

    const loginUserHandler = async (e) => {
        e.preventDefault();
        loginHandler(loginform.email, loginform.password)
    }

    return (
        <main className="main-auth-container">
            <div className="auth-container">
                <h1>Sign In</h1>
                <div className="lower-auth-container">
                    <form onSubmit={loginUserHandler}>
                        <div className="auth-card-item">
                            <label for="email_for_login">Email Address:</label>
                            <input required onChange={login_email_handler} value={loginform.email} className="auth-input" type="email" placeholder="dummy@gmail.com" id="email_for_login" style={{ border: loginError.status && "1px solid red" }} />
                        </div>

                        <div className="auth-card-item">
                            <label>Password:</label>
                            <input required onChange={login_password_handler} value={loginform.password} className="auth-input" type="password" style={{ border: loginError.status && "1px solid red" }} />
                        </div>
                        <p className="login-error" style={{ opacity: loginError.status ? "1" : "0" }}> {loginError.status} {loginError.message} </p>

                        <div className="button-container">
                            <button type="submit" className="auth-button">Login</button>
                            <button className="auth-button" onClick={loginAsGuestHandler}>Login as guest</button>
                        </div>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>

            </div>
        </main>
    )
}

export default Login
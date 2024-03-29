import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/auth-context";

const Signup = () => {
    const { signupHandler, signupError, setSignupError } = useContext(AuthContext)
    const [newUserForm, setNewuserForm] = useState({
        email: "",
        password: "",
        name: ""
    })
    const [newUserPassword, setNewUserPassword] = useState("")
    const [newUserConfirmPassword, setNewUserConfirmPassword] = useState("")
    const [password_unmatch_error, setPassword_unmatch_error] = useState("")
    const signup_name_handler = (e) => {
        setNewuserForm(prev => ({ ...prev, name: e.target.value }))
    }

    const signup_email_handler = (e) => {
        setNewuserForm(prev => ({ ...prev, email: e.target.value }))
        setSignupError({ status: "", message: "" })
    }
    const new_user_password = (e) => {
        const password = e.target.value
        if (password.length < 6) {
            e.target.setCustomValidity("Password must be at least 6 characters long.");
        } else if (!/\d/.test(password)) {
            e.target.setCustomValidity("Password must contain at least one number.");
        } else {
            e.target.setCustomValidity("");
        }

        setNewUserPassword(e.target.value)
        setPassword_unmatch_error("")
    }
    const new_user_confirm_password = (e) => {
        setNewUserConfirmPassword(e.target.value)
        setPassword_unmatch_error("")
    }

    const signup_form_handler = async (e) => {
        e.preventDefault()

        if (newUserPassword !== newUserConfirmPassword) {
            setPassword_unmatch_error("Password does not match!")
            return;
        }
        signupHandler(newUserForm.email, newUserForm.password, newUserForm.name)
    }

    return (
        <>
            <main className="main-auth-container">
                <div className="auth-container">
                    <h1>Sign Up</h1>

                    <div className="lower-auth-container">
                        <form onSubmit={signup_form_handler}>
                            <div className="auth-card-item">
                                <label for="name_for_signup">Name:</label>
                                <input required className="auth-input" type="text" placeholder="James Bond" id="name_for_signup" onChange={signup_name_handler} />
                            </div>

                            <div className="auth-card-item">
                                <label for="email_for_signup">Email Address:</label>
                                <input required className={`auth-input ${signupError.status && "error_input"}`} type="email" placeholder="dummy@gmail.com" id="email_for_signup" onChange={signup_email_handler} />
                            </div>

                            <div className="auth-card-item">
                                <label for="password_for_signup">Password:</label>
                                <input required className={`auth-input ${password_unmatch_error && "error_input"}`} type="password" placeholder="*******" id="password_for_signup" onChange={new_user_password} />
                            </div>
                            <div className="auth-card-item">
                                <label for="confirm_password_for_signup">Confirm Password:</label>
                                <input required className={`auth-input ${password_unmatch_error && "error_input"}`} type="password" placeholder="*******" id="confirm_password_for_signup" onChange={new_user_confirm_password} />
                            </div>
                            <p className="login-error">{password_unmatch_error}</p>
                            <p className="login-error">{signupError.status} {signupError.message}</p>
                            <div className="button-container">
                                <button type="submit" className="auth-button">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signup
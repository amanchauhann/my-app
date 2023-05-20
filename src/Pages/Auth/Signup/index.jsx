import { useContext, useState } from "react";
import Input from "../../../Components/Auth/Input";
import {requiredData} from "./RequiredData"
import { AuthContext } from "../../../Contexts/auth-context";

const Signup = () => {
    const {signupHandler} = useContext(AuthContext)
    const [newUserForm, setNewuserForm] = useState({
    email: "",
    password: "",
    name: ""
})
const [newUserPassword, setNewUserPassword] = useState("")
const [newUserConfirmPassword, setNewUserConfirmPassword] = useState("")
const [password_unmatch_error, setPassword_unmatch_error] = useState("")
    const signup_name_handler = (e) => {
            setNewuserForm(prev=> ({...prev, name: e.target.value}))
        }
    
    const signup_email_handler = (e) => {
        setNewuserForm(prev=> ({...prev, email: e.target.value}))
    }
    const new_user_password = (e) => {
        setNewUserPassword(e.target.value)
    }
    const new_user_confirm_password = (e) => {
        setNewUserConfirmPassword(e.target.value)
    }

    const signup_form_handler = async(e) => {
        e.preventDefault()

        if(newUserPassword !== newUserConfirmPassword){
            setPassword_unmatch_error("Password does not match!")
            return;
        }
        signupHandler(newUserForm.email, newUserForm.password, newUserForm.name)
        // const res = await fetch("/api/auth/signup", {
        //                     method: "POST",
        //                     headers: {
        //                         "Content-Type": "application/json"
        //                     },
        //                     body: JSON.stringify(newUserForm)
        //                 })
        // const status = await res.status
        // const data = await res.json()
        // console.log(status)
    }

        // console.log(newUserForm)
    return(
        <>
            <main className="main-auth-container">
            <div className="auth-container">
                <h1>Sign Up</h1>

                <div className="lower-auth-container">
                    {/* {requiredData.map((eachRequiredData) => <div className="auth-card-item"> <Input {...eachRequiredData} /> </div>)} */}
                    <form onSubmit={signup_form_handler}>
                    <div className="auth-card-item">
                        <label for="name_for_signup">Name:</label>
                        <input required className="auth-input" type="text" placeholder="James Bond" id="name_for_signup" onChange={signup_name_handler}/>
                    </div>

                    <div className="auth-card-item">
                        {/* <Input id={"email_for_signup"} type={"email"} placeholder={"dummy@gmail.com"} label={"Email address"}/> */}
                        <label for="email_for_signup">Email Address:</label>
                        <input required className="auth-input" type="email" placeholder="dummy@gmail.com" id="email_for_signup" onChange={signup_email_handler}/>
                    </div>

                    <div className="auth-card-item">
                        <label for="password_for_signup">Password:</label>
                        <input required className="auth-input" type="password" placeholder="*******" id="password_for_signup" onChange={new_user_password}/>
                    </div>
                    <div className="auth-card-item">
                        <label for="confirm_password_for_signup">Confirm Password:</label>
                        <input required className="auth-input" type="password" placeholder="*******" id="confirm_password_for_signup" onChange={new_user_confirm_password}/>
                    </div>
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
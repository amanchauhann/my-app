import Input from "../../../Components/Auth/Input";
import {requiredData} from "./RequiredData"

const Signup = () => {
    return(
        <>
            <main className="main-auth-container">
            <div className="auth-container">
                <h1>Sign Up</h1>

                <div className="lower-auth-container">
                    {requiredData.map((eachRequiredData)=>  <div className="auth-card-item"> <Input {...eachRequiredData} /> </div>)}
                    {/* <div className="auth-card-item">
                        <label for="name_for_signup">Name:</label>
                        <input className="auth-input" type="text" placeholder="James Bond" id="name_for_signup"/>
                    </div> */}
                    {/* <div className="auth-card-item"> */}
                        {/* <Input id={"email_for_signup"} type={"email"} placeholder={"dummy@gmail.com"} label={"Email address"}/> */}
                        {/* <label for="email_for_signup">Email Address:</label>
                        <input className="auth-input" type="email" placeholder="dummy@gmail.com" id="email_for_signup"/> */}
                    {/* </div> */}
                    {/* <div className="auth-card-item">
                        <label for="password_for_signup">Password:</label>
                        <input className="auth-input" type="password" placeholder="*******" id="password_for_signup"/>
                    </div>
                    <div className="auth-card-item">
                        <label for="confirm_password_for_signup">Confirm Password:</label>
                        <input className="auth-input" type="password" placeholder="*******" id="confirm_password_for_signup"/>
                    </div> */}
                    <div className="button-container">
                        <button className="auth-button">Sign up</button>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Signup
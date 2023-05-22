import { useContext } from "react"
import { AuthContext } from "../../../Contexts/auth-context"
import { useNavigate } from "react-router-dom"

const Details = () => {
    const { logged_user, logout_handler } = useContext(AuthContext)
    const { name, email } = logged_user
    // const name = firstName + lastName
    const navigate = useNavigate();
    console.log("lll", name)

    const profile_logout_handler = () => {
        logout_handler();
        navigate('/logout');
    }
    return (
        <>
            <div className="profile_details">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
            <button onClick={profile_logout_handler}>Logout</button>
        </>

    )
}

export default Details
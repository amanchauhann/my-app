import { Link } from "react-router-dom"
import "./logout.css"

const Logout = () => {
    return(
        <div className="logout_container">
            <main>
            <h1>You have been successfully logged out!</h1>
            <Link to="/products">
            <button className="logout_explore">Explore our products</button>
            </Link>
            
            </main>

        </div>
    )
}

export default Logout
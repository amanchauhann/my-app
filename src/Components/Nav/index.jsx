
import { Link } from "react-router-dom";
import NavList from "../Action/Nav/NavList";
import "./Nav.css";
import Home from "../../Pages/Home";

const Nav = () => {
    return(
        <>
        <nav className="navigation-bar">
            <Link to="/">
            <h2>Rones</h2>
            </Link>

            <input className="search-bar" type="search" />
            <div className="right-container">
            <ul className="ul-list">
                <NavList liText="Login" />
                <NavList liText="WishList" />
                <NavList liText="Cart" />
            </ul>
            </div>
            
        </nav>
        </>
    )
}

export default Nav;


import { Link, useLocation } from "react-router-dom";
import NavList from "../Action/Nav/NavList";
import "./Nav.css";
import Home from "../../Pages/Home";
import { useContext } from "react";
import { ContextData } from "../../index";

const Nav = () => {
    const location = useLocation()
    const {locationHandler} = useContext(ContextData)
    return(
        <>
        <nav className="navigation-bar">
            <Link to="/">
            <h2>Rones</h2>
            </Link>

            <input className="search-bar" type="search" placeholder="search here..." />
            <div className="right-container">
            <ul className="ul-list">
                <Link to="/login" onClick={()=>locationHandler(location)}>
                    <NavList liText="Login" />
                </Link>
                <NavList liText="WishList" />
                <NavList liText="Cart" />
            </ul>
            </div>
            
        </nav>
        </>
    )
}

export default Nav;

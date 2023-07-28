import { NavLink, Outlet } from "react-router-dom"
import "./ProfileCard.css"

const ProfileCard = () => {
    const getActiveStyle = ({ isActive }) => ({
        background: isActive ? "rgba(255,255,255,.1)" : ""
    });
    return (
        <>
            <div className="profile_container">
                <nav className="profile_nav_container">
                    <NavLink style={getActiveStyle} to="/profile/details" activeClassName="activeNavLink">Profile Information</NavLink>
                    <NavLink style={getActiveStyle} to="/profile/address" activeClassName="activeNavLink">Adresses</NavLink>
                </nav>
                <div className="outlet_container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ProfileCard
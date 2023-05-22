import { NavLink, Outlet } from "react-router-dom"
import "./ProfileCard.css"

const ProfileCard = ({name, email}) => {
    const getActiveStyle = ({ isActive }) => ({
        // margin: "1rem 0",
        // fontWeight: isActive ? "600" : "200",
        // padding: isActive ? "1rem" : "0.5rem",
        // color: isActive ? "red" : "",
        background: isActive ? "rgba(255,255,255,.1)" : ""
      });
    return(
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
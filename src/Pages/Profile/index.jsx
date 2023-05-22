import { useContext } from "react"
import { AuthContext } from "../../index"
import ProfileCard from "../../Components/Profile"
import "./Profile.css"

const Profile = () => {
    const {logged_user} = useContext(AuthContext)
    const {firstName, lastName, email} = logged_user
    const name = firstName + lastName
    return (
        <main className="profile_main_container">
            <ProfileCard />
        </main>
    )
}

export default Profile
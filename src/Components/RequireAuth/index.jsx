import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../index"

export const RequireAuth = ({ children }) => {
    const { logged_user } = useContext(AuthContext)
    const location = useLocation()
    return logged_user ? children : <Navigate to="/login" state={{ from: location }} />
}
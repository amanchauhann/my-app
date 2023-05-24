import { Navigate } from "react-router-dom"

export const RequireAuth = ({ children, isLoggedin }) => {
    return isLoggedin ? children : <Navigate to="/login" />
}
import { Navigate, useLocation, Outlet } from "react-router-dom";

function Authen() {
    const loginUser = localStorage.getItem('loginUser') ; 
    console.log(loginUser)
    const location = useLocation() ; 
    return (

            loginUser ? <Outlet/> : <Navigate to='/' state={{from: location} } replace />
    ) 
}
export default Authen ; 
import { Link } from "react-router-dom";
import { useAuth } from "../Security/AuthContext";

export default function Header() {

    const authContext = useAuth()

    const isAuthenticated = authContext.isAuthenticated

    function logout(){
        authContext.logout()
    }

    return (
        <header className="bg-primary border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="#" >TaskManagementSystem</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/viewtasklist/kdojha115">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/addtaskitem">Add Task</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            { isAuthenticated === false && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            { isAuthenticated === true && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}
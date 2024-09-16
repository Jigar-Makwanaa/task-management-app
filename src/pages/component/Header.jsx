import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const Header = () => {

    const [auth, setAuth] = useAuth();

    const Logout = () => {
        setAuth({
            ...auth,
            user: null
        })
        localStorage.removeItem('userlogin')
        alert("User Logout")
    }


    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="menu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                    <li className="nav-item">
                            <Link className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/task"} className="nav-link">Task</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {
                            auth.user ? (
                                <li className="nav-item">
                                    <Link onClick={() => Logout()} className="nav-link">Logout</Link>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to={`/register`} className="nav-link">Register</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to={`/`} className="nav-link">Login</Link>
                                    </li>
                                </>
                            )
                        }



                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header

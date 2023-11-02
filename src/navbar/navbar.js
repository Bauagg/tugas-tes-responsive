import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import style from './style-navbar.module.css'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const NavbarUser = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">SERVICE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/stoptwarch' className="nav-link">STOPTWARCH</Link>
                            </li>
                        </ul>
                        <input type='text' placeholder='Search' />
                    </div>
                </div>
                {
                    expanded &&
                    <div className={style.conten1}>
                        <div>
                            <ul className='list-unstyled text-white'>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link" aria-current="page" onClick={() => setExpanded(false)}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => setExpanded(false)}>Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => setExpanded(false)}>Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => setExpanded(false)}>Disabled</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/stoptwarch' className="nav-link" onClick={() => setExpanded(false)}>STOPTWARCH</Link>
                                </li>
                            </ul>
                        </div>
                        <input className={style.input1} type='text' placeholder='Search' />
                    </div>
                }
            </nav>
        </div>
    )
}

export default NavbarUser
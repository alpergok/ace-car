import React from 'react';
import logo from '../img/Logo_wname_v2.png';
import { Link, withRouter } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <Link to="/">
                <img className="logo" src={logo} alt="AceCar" />
            </Link>
            <ul className="nav-links">
                <Link className="link" to="/about">
                    <li>Yolculuk Ara</li>
                </Link>
                <Link className="link" to="/about">
                    <li>İlan Ver</li>
                </Link>
                <Link className="link" to="/login">
                    <li>Giriş Yap</li>
                </Link>
                <Link className="link" to="/login">
                    <li>Kaydol</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;

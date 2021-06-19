import React from 'react';
import logo from '../../img/Logo_v3.png';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <Link to="/">
                <img className="logo" src={logo} alt="AceCar" />
            </Link>
            <ul className="nav-links">
                <Link className="link" to="/searchtrip">
                    <li>Yolculuk Ara</li>
                </Link>
                <Link className="link" to="/createtrip">
                    <li>İlan Ver</li>
                </Link>
                <Link className="link" to="/login">
                    <li>Giriş Yap</li>
                </Link>
                <Link className="link" to="/signup">
                    <li>Kaydol</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;

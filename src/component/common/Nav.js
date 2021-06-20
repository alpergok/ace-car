import { React, useState, useCallback, Component } from 'react';
import AuthService from '../../service/AuthService';
import logo from '../../img/Logo_v3.png';
import { Link } from 'react-router-dom';
import '../../css/Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: Boolean };
    }
    handleLogout = () => {
        AuthService.logout();
        this.setState({
            isLoggedIn: AuthService.authCheck()
        });
    }

    render() {
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
                    
                    {this.state.isLoggedIn
                        ? <Link className="link" to="/login" onClick={this.handleLogout}><li>Çıkış Yap</li></Link>
                        :
                        <Link className="link" to="/login">
                            <li>Giriş Yap</li>
                        </Link>
                    }

                </ul>
            </nav>
        )
    }

}

export default Nav;

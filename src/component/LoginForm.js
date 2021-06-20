import { React, useState } from 'react';
import '../css/LoginForm.css';
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../service/AuthService';
import Nav from './common/Nav';

const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = event => {
        event.preventDefault();
        console.log(email);
        AuthService.login({ email, password })
            .then(response => {
                if (response.status === 200) {
                    sessionStorage.setItem('isLogged', 'true');
                    props.setUser(email);
                    window.location = "/about";
                }
            }).catch(err => console.log(err));
    }

    if (AuthService.authCheck === true)
        return <Redirect to='/about' />


    return (
        <div>
            <div className="login-box">
                <form className="email-login">
                    <div className="u-form-group email">
                        <input value={email} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="u-form-group password">
                        <input value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="u-form-group" onClick={handleLoginClick}>
                        <button>Giriş Yap</button>
                    </div>
                    <div className="u-form-group">
                        <Link to="/forgotpassword">
                            <div className="u-form-group">
                                <span className="other-options">Şifremi unuttum</span>
                            </div>
                        </Link>
                    </div>
                    <Link to="/signup">
                        <div className="u-form-group">
                            <span className="signup other-options">Hesabın yok mu? Kaydol.</span>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

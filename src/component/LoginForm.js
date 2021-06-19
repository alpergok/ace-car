import { React, useState } from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = event => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <div className="login-box">
                <form className="email-login">
                    <div className="u-form-group email">
                        <input value={password} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
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

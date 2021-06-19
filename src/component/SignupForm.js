import React from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
function LoginForm() {
    return (
        <div>
            <div className="login-box">
                <form className="email-login">
                    <div className="u-form-group email">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="u-form-group password">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="u-form-group">
                        <button>Kaydol</button>
                    </div>
                    <Link to="/login">
                        <div className="u-form-group">
                            <span className="signup other-options">Zaten üye misin? Giriş yap.</span>
                        </div>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default LoginForm

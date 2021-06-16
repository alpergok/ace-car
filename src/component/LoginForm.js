import React from 'react';
import '../css/LoginForm.css';
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
                        <button>Giriş Yap</button>
                    </div>
                    <div className="u-form-group">
                        <a href="#" className="other-options">Şifremi unuttum</a>
                    </div>
                    <div className="u-form-group">
                        <a href="#" className="other-options">Hesabın yok mu? Kaydol.</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

import React from 'react';
import Nav from '../Nav';
import LoginForm from '../LoginForm.js';
function LoginPage() {
  return (
    <div className="Login">
      <Nav />
      <h1 className = "header"> <strong> AceCar'a giriş yap. </strong></h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;

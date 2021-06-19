import React from 'react';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import LoginForm from '../LoginForm.js';

function LoginPage() {

  return (
    <div>
      <Nav />
      <div className="Login" style={{marginBottom: "20px"}}>
        <h1 className="header"> <strong> AceCar'a giriş yap. </strong></h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;

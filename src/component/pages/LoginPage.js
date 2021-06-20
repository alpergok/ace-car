import { React, useState }from 'react';
import Nav from '../common/Nav';
import LoginForm from '../LoginForm.js';
function LoginPage() {
  const [user, setUser] = useState('');
  return (
    <div>
      <div className="Login" style={{marginBottom: "20px"}}>
        <h1 className="header"> <strong> AceCar'a giriş yap. </strong></h1>
        <LoginForm setUser = { activeUser => setUser(activeUser)}/>
      </div>
    </div>
  );
}

export default LoginPage;

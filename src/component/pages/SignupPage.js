import React from 'react';
import Nav from '../common/Nav';
import SignupForm from '../SignupForm.js';
function SignupPage() {
  return (
    <div className="signup">
      <Nav />
      <h1 className = "header"> <strong> AceCar'a kaydol. </strong></h1>
      <SignupForm />
    </div>
  );
}

export default SignupPage;

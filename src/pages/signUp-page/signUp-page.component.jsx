import React from 'react';
import './signUp-page.style.scss';
import SignUp from '../../components/sign-up/sign-up.component';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return(
    <div className="container signUp-page">
      <SignUp />
        <p className="signup-link">Already have account ? <Link to="/signin">Log In</Link></p>
    </div>
  );
}
export default SignUpPage;
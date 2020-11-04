import React from 'react';
import './signIn-page.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import { Link } from 'react-router-dom';


const SignInPage = () => {
  return(
    <div className="container signIn-page">
      <SignIn />
      <p className="signin-link">Don't have an account ? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}
export default SignInPage;


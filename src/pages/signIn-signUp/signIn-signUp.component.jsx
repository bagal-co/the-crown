import React from 'react';
import './signIn-signUp.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => {
  return(
    <div className="container signIn-signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}
export default SignInAndSignUp;
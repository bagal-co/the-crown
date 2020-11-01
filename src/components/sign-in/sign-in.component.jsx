import React from 'react';
import './sign-in.style.scss';
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button from '../../components/custom-button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
// import { Link } from 'react-router-dom';


class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    }catch(error){
      console.log(error);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="#" onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
        

          <FormInput type="password" name="password" value={this.state.password} 
           handleChange={this.handleChange} label="Password" required/>
          

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button ttype="button" onClick={signInWithGoogle} googleSignIn>Sign In with google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/custom-button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(){
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword){
      alert("Password don't match");
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({ 
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }catch(error){
      console.error(error);
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render(){
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className="sign-up">
        <h2 className="title">Sign up and enjoy shopping</h2>
        

        <form action="#" className="sign-up-from" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>

          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>

          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>

          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
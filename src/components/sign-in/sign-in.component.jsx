import React from 'react';
import './sign-in.style.scss';
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button from '../../components/custom-button/button.component';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: ''})
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
          

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
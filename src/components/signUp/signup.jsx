import React from 'react';
import FormInput from '../formInput/formInput.jsx';
import CustomButton from '../custom-button/custom-button.jsx'
import { auth, createUserProfile } from '../../firebase/firebase-utils'
import './signup.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Password Not Match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfile(user, { displayName })
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I dont have an account</h1>
        <span>sign up with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            required
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            required
            value={email}
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            required
            value={password}
            label="Password"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">
            Sign Up
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
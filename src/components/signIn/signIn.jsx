import React from 'react';
import './signIn.scss';
import FormInput from '../formInput/formInput.jsx';
import CustomButton from '../custom-button/custom-button.jsx'

import { auth, signInWithGoogle } from '../../firebase/firebase-utils'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
    this.setState({
      email: "",
      password: ""
    })
  }
  handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }
  componentDidMoun() {
    this.setState({
      email: '',
      password: '',
    })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">
              Submit
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In With Google
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;
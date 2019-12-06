
import React from 'react';
import './signInSignUp.scss';
import '../../components/signIn/signIn.jsx'
import SignIn from '../../components/signIn/signIn.jsx';
import SignUp from '../../components/signUp/signup.jsx'
const SignInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUp;
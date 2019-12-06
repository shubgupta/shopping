import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/hompage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signInSignUp/signInSignUp.jsx';
import { auth, createUserProfile } from './firebase/firebase-utils'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        let userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

      } else {
        this.setState({
          currentUser: userAuth
        })

      }

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;

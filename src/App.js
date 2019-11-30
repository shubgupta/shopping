import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/hompage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signInSignUp/signInSignUp.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;

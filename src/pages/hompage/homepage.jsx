import React from 'react';
import './homepage.scss'
import Directory from '../../components/directory/directory'
const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome To Shubham's Shop</h1>
      <Directory />
    </div>
  )
}
export default HomePage;
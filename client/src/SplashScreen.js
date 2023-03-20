import React from 'react'
import logo from '../src/Header/Logo.png'
import './SplashScreen.css'
const SplashScreen = () => {
  return (
    <div className='SplashScreenContainer'>
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default SplashScreen
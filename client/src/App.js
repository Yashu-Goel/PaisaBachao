import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import Homepage from './Components/Homepage';
import React, { useState } from 'react';
import TotalAmount from './Components/TotalEarning/TotalAmount';
import Settngs from './Components/Settngs/Settings';
import PaymentHistory from './Components/PaymentHistory/PaymentHistory';
import HowDoesItWork from './Components/HowDoesItWork/HowDoesItWork';
import ResetPass from './Authentication/ResetPass/ResetPass';
import SplashScreen from './SplashScreen';
export const CredentialContext = React.createContext(null);

function App() {
  const credentialstate = useState(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (isLoading ? <SplashScreen/> :
    <div>
      <CredentialContext.Provider value={credentialstate}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/myearning' element={<TotalAmount />} />
            <Route exact path='/setting' element={<Settngs />} />
            <Route exact path='/setting/payment-history' element={<PaymentHistory />} />
            <Route exact path='/querycard' element={<HowDoesItWork />} />
            <Route exact path='/resetpassword' element={<ResetPass />} />
          </Routes>
        </Router>
      </CredentialContext.Provider>
    </div>
  );
}

export default App;



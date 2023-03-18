import './Navbar.css'
import { AiFillSetting } from "react-icons/ai";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Support from "../Settngs/SuppModal";
import ResetModal from "../Settngs/ResetModal";

const Navbar = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  function LogoutHandler() {
    localStorage.removeItem("profile");
    navigate('/');
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const [resetModal, setResetModal] = useState(false);

  const closeResetModal = (e) => {
    e.preventDefault();
    setResetModal(false);
  };
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div className="topnav" id="myTopnav">
        <Link to='/' className='Home'>Home</Link>
        <Link to="/setting/payment-history">Payment History</Link>
        <Link id="support" onClick={() => setShowModal(true)}>Support</Link>
        <Link to="/myearning">My Earnings</Link>
        <Link onClick={() => setResetModal(true)}>Reset Password</Link>
        <Link to="/setting" id="setting1" className='active'><AiFillSetting /></Link>
        <Link to='/' onClick={LogoutHandler}>Logout</Link>
        <Link className="icon" onclick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
      {showModal && <Support closeModal={closeModal} />}
      {resetModal && <ResetModal closeResetModal={closeResetModal} />}
    </>
  )
}


export default Navbar
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


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="topnav" id="myTopnav">
        <Link to='/' className='Home'><span>Home</span></Link>
        <Link to="/setting/payment-history">Payment History</Link>
        <Link id="support" onClick={() => setShowModal(true)}>Support</Link>
        <Link to="/myearning">My Earnings</Link>
        <Link onClick={() => setResetModal(true)}>Reset Password</Link>
        <Link to="/setting" id="setting1" className='active'><AiFillSetting /></Link>
        <Link to='/' onClick={LogoutHandler}>Logout</Link>

        <div className='Menu'>
          
        <Link className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars">
          </i>
          {showMenu && (
            <div>
            <div className='SettingBackground'></div>
          <div className="SettingMenu">
            <div><Link to="/"><span>Home</span></Link></div>
            <div><Link to="/setting/payment-history"><span>Payment History</span></Link></div>
            <div><Link to="/myearning"><span>My Earnings</span></Link></div>
            <div><Link onClick={() => setResetModal(true)}><span>Reset Password</span></Link>
</div>
            <div><Link to='/' >
              <span>Logout</span>
            </Link></div>
          </div>
          </div>
        )}
        </Link>
        </div>


        {/* <Link className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars">
          </i>
          {showMenu && (
          <div className="SettingMenu">
            <Link to="/"><span>Home</span></Link>
            <Link to="/payment-history">Payment History</Link>
            <a href="/" >
              Logout
            </a>
          </div>
        )}
        </Link> */}
      </div>
      {showModal && <Support closeModal={closeModal} />}
      {resetModal && <ResetModal closeResetModal={closeResetModal} />}
    </>
  )
}


export default Navbar
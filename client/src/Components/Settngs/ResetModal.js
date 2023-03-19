import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ResetModal.css'
import axios from "axios";
import { toast} from 'react-toastify';

const API_BASE = "https://fair-bear-gaiters.cyclic.app";

const ResetModal = ({ closeResetModal }) => {

    const navigate = useNavigate();

    const [curr, setCurr] = useState("");
    const [newPass, setNew] = useState("");
    const [conPass, setCon] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (newPass !== conPass) {
            toast.info("Password not matching");
            return;
        }

        const token = localStorage.getItem("profile");

        axios.post(API_BASE + "/edit-pass", {
            headers: {
                "Content-Type": "application/json",
            },
            body: ({ curr: curr, conPass: conPass, token: token })
        })
            .then((res) => {

                toast.success("Password Changed successfully");
                setTimeout(() => {
                    navigate("/");
                    localStorage.removeItem("profile");

                }, 2500);
            })
            .catch((error) => toast.error(error.response.data));
    }


    return (
        <>
            <div className='outer-outer-support'>
                <div className='outer-support'>
                    <button onClick={closeResetModal} className='close-button'>x</button>
                    <div className="sup-container">

                        <h1 className='sup-head'>Reset Password</h1>
                        <form id="contact-form" onSubmit={onSubmitHandler} >
                            <div className="form-group">
                                <label htmlFor="password">Current Password</label><br />
                                <input type="password" className="form-control" placeholder='Current Password' required onChange={(e) => setCurr(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newpassword">New Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Password' required onChange={(e) => setNew(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Confirm Password' required onChange={(e) => setCon(e.target.value)} />
                            </div>
                            <button type="submit" className="sup-btn">Submit</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default ResetModal
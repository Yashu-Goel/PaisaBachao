import './SuppModal.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const API_BASE = "https://fair-bear-gaiters.cyclic.app";

const Support = ({ closeModal }) => {

    const handleErrors = async (res) => {
        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        } else if (res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }

    const [isError, setIsError] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (name === "" || subject === "" || message === "") {
            alert("please fill the required fields");
            return;
        }
        fetch(API_BASE + "/support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject: subject, message: message, name: name
            })
        })
            .then(toast.success("Message Send Successfully"))
            .then(window.location.reload(true))
            .catch((error) => {
                setIsError(error.message);
            })
    }
    return (
        <div>
            <div className='outer-outer-support'></div>
            <div className='outer-support'>
                <button onClick={closeModal} className='close-button'>x</button>
                <div className="sup-container">
                    <h1 className='sup-head'>Contact Form</h1>
                    <form id="contact-form" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' required autoComplete='on'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Subject</label>
                            <br />
                            <input autoComplete='on' type="text" className="form-control" aria-describedby="emailHelp" placeholder='payment issue' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <br />
                            <textarea className="form-control" rows="5" placeholder='mention your issue here ...' value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <button type="submit" className="sup-btn" onClick={handleSubmit}>Submit</button>
                        {(isError === "Changes Saved Successfully") && <p className='sup-success'>&#9989;{isError}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Support
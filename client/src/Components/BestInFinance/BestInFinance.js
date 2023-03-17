import React from 'react'
import "./BestInFinance.css"

const BestInFinance = () => {

    let box = document.querySelector('.best-slide');
    
    return (
        <div className='best-container'>

            <span>BEST IN FINANCE</span>

            <button className='best-btn pre' onClick={() => {
                let width = box.clientWidth;
                box.scrollLeft = box.scrollLeft - width;
            }}><p>&lt;</p></button>
            <button className='best-btn pos' onClick={() => {
                let width = box.clientWidth;
                box.scrollLeft = box.scrollLeft + width;
            }}><p>&gt;</p></button>

            <div className='best-slide'>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit2.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit3.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit4.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit6.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit7.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit8.png')} />
                    </div>
                </div>

                <div className='best-card'>
                    <div className='best-image'>
                        <img src={require('./Images/CardEdit4.png')} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestInFinance
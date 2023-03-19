import React from "react";
import "./BestInFinance.css";

const BestInFinance = () => {


  return (
    <div className="FinanceCarousel">
      <button
        className="FinanceNextButton"
        onClick={() => {
          let FinanceBox = document.querySelector(".best-slide");
          let FinanceBoxWidth = FinanceBox.clientWidth;
          FinanceBox.scrollLeft = FinanceBox.scrollLeft + FinanceBoxWidth;
        }}
      >
        <p>&gt;</p>
      </button>
      <button
        className="FinancePrevButton"
        onClick={() => {
          let FinanceBox = document.querySelector(".best-slide");
          let FinanceBoxWidth = FinanceBox.clientWidth;
          FinanceBox.scrollLeft = FinanceBox.scrollLeft - FinanceBoxWidth ;
        }}
      >
        <p>&lt;</p>
      </button>

      <div className="best-container">
        <span>BEST IN FINANCE</span>

        <div className="best-slide">
          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit.png")} alt="CreditCard1"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit2.png")} alt="CreditCard2"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit3.png")} alt="CreditCard3"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit4.png")} alt="CreditCard4"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit6.png")} alt="CreditCard5"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit7.png")} alt="CreditCard6"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit8.png")} alt="CreditCard7"/>
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit4.png")} alt="CreditCard8"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestInFinance;

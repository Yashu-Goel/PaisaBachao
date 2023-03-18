import React from "react";
import "./BestInFinance.css";

const BestInFinance = () => {
  //   let box = document.querySelector(".best-slide");

  return (
    <div className="FinanceCarousel">
      {/* <button
        className="best-btn pre"
        onClick={() => {
          let Box = document.querySelector(".best-container");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft - Width + 5;
          console.log("okok");
        }}
      >
        <p>&lt;</p>
      </button>
      <button
        className="best-btn pos"
        onClick={() => {
          let Box = document.querySelector(".best-container");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft +  Width - 5;
          console.log("okok");
        }}
      >
        <p>&gt;</p>
      </button> */}
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
              <img src={require("./Images/CardEdit.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit2.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit3.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit4.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit6.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit7.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit8.png")} />
            </div>
          </div>

          <div className="best-card">
            <div className="best-image">
              <img src={require("./Images/CardEdit4.png")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestInFinance;

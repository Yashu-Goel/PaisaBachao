import React from "react";
import './TopCashbackStores.css'
import TopCashbackStoresCard from '../TopCashbackStoresCard/TopCashbackStoresCard'
import Data from "./TopCashBack.json"

const TopCashbackStores = () => {

  return (
    <div className='TopCashbackStoresMainConatiner'>
      <span>TOP CASHBACK STORES</span>
      <div className="TopCashbackStoresCarousel">
        <button
          className="PrevBtn"
          onClick={() => {
            let Box = document.querySelector(".TopCashbackStoresContainer");
            let Width = Box.clientWidth;
             let a = 0;
            // if (Width < 400) {
            //   a = 370 - Width;
            // }
            Box.scrollLeft = Box.scrollLeft - Width + a;
            console.log(Width);
            Box = document.querySelector(".TopCashbackStoresContainer1");
            Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft - Width + a;
          }}
        >
          <p>&lt;</p>
        </button>
        <button
          className="NextBtn"
          onClick={() => {
            let Box = document.querySelector(".TopCashbackStoresContainer ");
            let Width = Box.clientWidth;
             let a = 0;
            // if (Width < 400) {
            //   a = 370 - Width;
            // }
            Box.scrollLeft = Box.scrollLeft + Width - a;
            Box = document.querySelector(".TopCashbackStoresContainer1");
            Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft + Width - a;
          }}
        >
          <p>&gt;</p>
        </button>
        <div className="TopCashbackStoresContainer">
          {Data.map((TopCashbackStoresArray, index) => {
            return (
              <TopCashbackStoresCard
                key={index}
                id={TopCashbackStoresArray.id}
                ImageSrc={TopCashbackStoresArray.ImageSrc}
                Cashback={TopCashbackStoresArray.Cashback}
                Offer={TopCashbackStoresArray.Offer}
                BrandName={TopCashbackStoresArray.BrandName}
                Link={TopCashbackStoresArray.Link}
              />
            );
          })}
        </div>
        <div className="TopCashbackStoresContainer1">
          {Data.reverse().map((TopCashbackStoresArray, index) => {
            return (
              <TopCashbackStoresCard
                key={index}
                id={TopCashbackStoresArray.id}
                ImageSrc={TopCashbackStoresArray.ImageSrc}
                Cashback={TopCashbackStoresArray.Cashback}
                Offer={TopCashbackStoresArray.Offer}
                BrandName={TopCashbackStoresArray.BrandName}
                Link={TopCashbackStoresArray.Link}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default TopCashbackStores
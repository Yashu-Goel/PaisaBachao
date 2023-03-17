import React from "react";
import "./ImageCarousel.css";
import OfferCard from "../OfferCard/OfferCard";
import Data from "./offer_data_mock.json";


const ImageCarousel = () => {

  return (
    <div className="ProductCarousel">
      <span>&#10021; DEAL OF THE DAY &#10021;</span>
      <button
        className="PrevBtn"
        onClick={() => {
          let Box = document.querySelector(".ProductContainer");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft - Width - 5;
        }}
      >
        <p>&lt;</p>
      </button>
      <button
        className="NextBtn"
        onClick={() => {
          let Box = document.querySelector(".ProductContainer");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft + Width + 5;
        }}
      >
        <p>&gt;</p>
      </button>

      <div className="ProductContainer">
        {Data.map((OfferData, index) => {
          return (
            <OfferCard
              key={index}
              ProductImage={OfferData.ProductImage}
              BrandImage={OfferData.BrandImage}
              Discount={OfferData.Discount}
              Cashback={OfferData.Cashback}
              Color={OfferData.Color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
